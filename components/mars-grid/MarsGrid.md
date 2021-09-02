# Mars Grid

## Props

- `className` - The custom class name
- `icon` - The icon used as a label of the Button
- `isCircle` - Determines whether the Button should be rounded
- `isDisabled` - Determines whether the Button is disabled
- `isProcessing` - Determines whether Spinner should be displayed instead of a label
- `isWhite` - Determines whether the Button is white
- `label` - The label of the Button
- `addTitle` - Determines whether the Icon will show a title when hovering on it
- `onClick` - The callBack called after Button is clicked

## Usage

```jsx
<Mars Grid
  className="openWebPhone"
  icon="mute"
  isCircle={true}
  isDisabled={true}
  isProcessing={true}
  isWhite={true}
  label="Save"
  addTitle={true}
  onClick={cb}
/>
```
