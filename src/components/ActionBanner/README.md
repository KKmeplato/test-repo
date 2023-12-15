### Action Banner

Action Banner is a small component used to convey a variety of information in a compact manner, typically representing short messages prompting users for an immediate action within a card's context. The 'Upgrade' type, with its distinctive yellow and black design, serves to draw maximum attention..

#### Usage Guidelines

- Ensure the banner message is concise and to the point
- Use action buttons wisely; not every banner requires an action. Overusing can lead to decision fatigue for users.
- The "Upgrade" style should be used sparingly to maintain its attention-grabbing effect.

#### Usage

```tsx
// Action banner
<ActionBanner
  variant="default"
  action={{
   label:"Action"
   onClick:onclickHandler
  }}
>
  Action Banner content text
</ActionBanner>
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
