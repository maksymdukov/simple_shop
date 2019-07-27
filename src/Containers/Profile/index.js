import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Local components
import withErrorModal from "../../hoc/withErrorModal";
import Heading from "../../Components/UI/Heading";
import ProfileForm from "../../Components/Profile/ProfileForm";
import OnlySignInModal from "../../Components/Profile/OnlySignInModal";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// Components
import { Helmet } from "react-helmet/es/Helmet";

const Profile = ({
    profile,
    email,
    loading,
    updProfile,
    uploading,
    uploadError,
    uploadSuccess,
    doResetStatus,
    isReAuthModalOpened,
    hideReAuthModal
}) => {
    useEffect(() => () => doResetStatus(), []);
    const handleReAuthModalHide = () => {
        hideReAuthModal();
        const prof = { ...profile };
        updProfile(prof);
    };
    return (
        <section>
            <Helmet title="Profile" />
            <Heading variant="h4" color="primary" component="h2">
                Edit Profile
            </Heading>
            {/*<HeadingDivider/>*/}
            <ProfileForm
                onSubmit={updProfile}
                {...{
                    profile,
                    email,
                    loading,
                    uploading,
                    uploadError,
                    uploadSuccess
                }}
            />
            <OnlySignInModal
                isOpened={isReAuthModalOpened}
                handleClose={handleReAuthModalHide}
            />
        </section>
    );
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    updProfile: PropTypes.func.isRequired,
    uploading: PropTypes.bool.isRequired,
    uploadError: PropTypes.object,
    uploadSuccess: PropTypes.bool.isRequired,
    doResetStatus: PropTypes.func.isRequired,
    isReAuthModalOpened: PropTypes.bool.isRequired,
    hideReAuthModal: PropTypes.func.isRequired
};

const EnhancedProfile = withErrorModal(Profile);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnhancedProfile);
