import React, {useEffect} from 'react';
import withErrorModal from "../../hoc/withErrorModal";
import {connect} from "react-redux";
import {Helmet} from "react-helmet/es/Helmet";
import HeadingDivider from "../../Components/UI/HeadingDivider";
import Heading from "../../Components/UI/Heading";
import ProfileForm from "../../Components/Profile/ProfileForm";
import OnlySignInModal from "../../Components/Profile/OnlySignInModal";
import {mapStateToProps, mapDispatchToProps} from "./redux";


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
            {/*<HeadingDivider/>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)( EnhancedProfile );