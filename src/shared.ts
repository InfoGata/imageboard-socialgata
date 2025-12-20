type UiCheckSettings = {
  type: "check-settings";
};

type UiSaveSettings = {
  type: "save-settings";
  corsProxy: string;
};

export type UiMessageType = UiCheckSettings | UiSaveSettings;

type SettingsInfo = {
  type: "settings-info";
  corsProxy: string;
};

export type MessageType = SettingsInfo;
