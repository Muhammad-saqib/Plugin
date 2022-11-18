import * as React from "react";
import { IStackTokens, Stack } from "@fluentui/react/lib/Stack";
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from "@fluentui/react/lib/Dropdown";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
  { key: "Header", text: "Project Stage", itemType: DropdownMenuItemType.Header },
  { key: "s", text: "Client meeting" },
  { key: "d", text: "Director review" },
  { key: "r", text: "Revision" },
  { key: "l", text: "Live Deal" },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

export const ProjectStageDropDown: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown placeholder="Prject Stage" label="Project Stage" options={options} styles={dropdownStyles} />
    </Stack>
  );
};
