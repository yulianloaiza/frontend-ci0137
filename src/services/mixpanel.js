import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

const MixPanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        GO_TO_HOME: "GO_TO_HOME",
        GO_TO_ANIMALS: "GO_TO_ANIMALS",
        GO_TO_ORGANIZATIONS: "GO_TO_ORGANIZATIONS",
        GO_TO_ABOUT_US: "GO_TO_ABOUT_US",
        GO_TO_ADOPTION_FORM: "GO_TO_ADOPTION_FORM",
    }
};

export default MixPanel;