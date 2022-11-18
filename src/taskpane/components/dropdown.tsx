import * as React from "react";
import { IStackTokens, Stack } from "@fluentui/react/lib/Stack";
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from "@fluentui/react/lib/Dropdown";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
  { key: "Header", text: "Type of Job", itemType: DropdownMenuItemType.Header },
  { key: "pr", text: "Presentation" },
  { key: "cr", text: "Creative" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  { key: "prt", text: "Type of Job 2", itemType: DropdownMenuItemType.Header },
  { key: "Trt", text: "Print" },
  { key: "Trans", text: "Translation" },
  { key: "Bs", text: "Bis" },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

export const DropdownBasicExample: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown placeholder="Type of Job" label="Type of Job" options={options} styles={dropdownStyles} />
    </Stack>
  );
};
