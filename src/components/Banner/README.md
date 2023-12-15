### Banner

Banners are small components used to convey a variety of information in a compact manner, typically representing the display of a message or announcement.

##### Default Banner:

- Position is freely within the UI. Use when the message is general and not related to a specific card or section.

##### Inside Card Banner:

- Displayed inside cards. When the message or action is directly related to the content of context of a specific card.

#### Usage Guidelines

- Ensure the banner message is concise and to the point
- Use action buttons wisely; not every banner requires an action. Overusing can lead to decision fatigue for users.

#### Usage

```tsx
// Default banner
<Banner
  variant="default"
  title="Title text"
  children="Banner content text"
  hideIcon={true/false}
  primaryAction={{
    label: "Label",
    onClick: onClickHandler
  }}
  secondaryAction={{
    label: "Label2",
    onClick: onClickHandler
  }}
  onDismiss={onDismissHandler}
/>

// ... Inside banner
<Banner
  variant="critical"
  children="Banner content text"
  hideIcon
  isInsideCard
  primaryAction={{
    label: "Label",
    onClick: onClickHandler
  }}
  secondaryAction={{
    label: "Label2",
    onClick: onClickHandler
  }}
  onDismiss={onDismissHandler}
/>

```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
