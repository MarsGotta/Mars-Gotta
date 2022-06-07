# MarsNotification

## Props

- `className` - The custom class name
- `icon` - The icon used as a label of the MarsNotification
- `isCircle` - Determines whether the MarsNotification should be rounded
- `isDisabled` - Determines whether the MarsNotification is disabled
- `isProcessing` - Determines whether Spinner should be displayed instead of a label
- `isWhite` - Determines whether the MarsNotification is white
- `label` - The label of the MarsNotification
- `addTitle` - Determines whether the Icon will show a title when hovering on it
- `onClick` - The callBack called after MarsNotification is clicked

## Usage

```jsx
<MarsNotification
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
