import "./settings-area.styles.scss";
import TextInputSettings from "../text-input-settings/text-input-settings.component";
import ListSettings from "../list-settings/list-settings.component";
import CheckboxSettings from "../checkbox-settings/checkbox-settings.component";
import SubmitButtonSettings from "../submit-button-settings/submit-button-settings.component";


const SettingsArea = (props) => {
  const { boxItem } = props;

  let settings;
  switch (boxItem.name) {
    case "Text Input":
      settings = <TextInputSettings />;
      break;
    case "List":
      settings = <ListSettings />;
      break;
    case "Checkbox":
      settings = <CheckboxSettings />;
      break;
    case "Submit Button":
      settings = <SubmitButtonSettings />;
      break;

    default:
      settings = null;
      break;
  }

  return (
    <div className="settings-area">
      <h3 className="settings-area-title">Settings</h3>
      {settings}
      {console.log(boxItem)}
    </div>
  );
};

export default SettingsArea;
