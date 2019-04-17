import React, {useEffect} from 'react';
import {withStyles} from "@material-ui/core";
import withErrorModal from "../../hoc/withErrorModal";
import {connect} from "react-redux";
import {Helmet} from "react-helmet/es/Helmet";
import HeadingDivider from "../../Components/UI/HeadingDivider";
import Heading from "../../Components/UI/Heading";
import ProfileForm from "../../Components/Profile/ProfileForm";
import {updateProfile, resetStatus, hideReAuth} from "../../store/actions/profileActions";
import OnlySignInModal from "../../Components/Profile/OnlySignInModal";
import {signIn} from "../../store/actions/authActions";

const styles = (theme) => ({

});

const Profile = ({
                     classes,
                     profile,
                     email,
                     loading,
                     updProfile,
                     uploading,
                     uploadError,
                     uploadSuccess,
                     doResetStatus,
                     isReAuthModalOpened,
                     hideReAuthModal,
}) => {
    useEffect(()=> () => doResetStatus(),[]);
    const handleReAuthModalHide = () => {
        hideReAuthModal();
        const prof = {...profile};
        updProfile(prof);
    };
    return (
        <section>
            <Helmet title="Profile"/>
            <Heading variant="h4" color="primary" component="h2">
                Edit Profile
            </Heading>
            <HeadingDivider/>
            <ProfileForm
                onSubmit={updProfile}
              {...{profile, email, loading, uploading, uploadError, uploadSuccess}}
            />
            <OnlySignInModal
                isOpened={isReAuthModalOpened}
                handleClose={handleReAuthModalHide}
            />
        </section>
    );
};

const EnhancedProfile = withErrorModal(Profile);

const mapStateToProps = (state) => ({
    email: state.auth.email,
    profile: state.profile.profile,
    loading: state.profile.loading,
    uploading: state.profile.uploading,
    uploadError: state.profile.uploadError,
    uploadSuccess: state.profile.uploadSuccess,
    isReAuthModalOpened: state.profile.reauth,
    error: state.profile.error
});
const mapDispatchToProps = (dispatch) => ({
    updProfile: (profile) => dispatch(updateProfile(profile)),
    doResetStatus: () => dispatch(resetStatus()),
    hideReAuthModal: () => dispatch(hideReAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(EnhancedProfile ) );