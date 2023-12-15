### Badge

Badges are small components used to convey a variety of information in a compact manner. They can represent completion status, notifications, or simply act as indicators.
You can provide all props that are available for the HTML `span` element.

#### When to use

- **Status Indication:** Use the default badge with completion states to display progress or status of a task or element
- **Notification Count:** Utilize the notification badge when you need to display the number of unread notifications or updates related to an item
- **Notification Indicator:** The badge-dot is ideal for simply indicating the presence of notifications without specifying a count

#### Variants

##### Default Badge

- Usage: Display progress or status, especially when detailed categorization (completed, partially, uncompleted) is required
- Options: Can be shown with or without an `prefixIcon`

##### Notification Badge

- Differences: Slightly different in size and font-size from the default badge
- Usage: Display the number of notifications or updates related to a specific item or action

##### Badge-Dot:

Act as a simple indicator to hint at unread notifications or changes without showing a specific count

#### Usage

```tsx
// Default badge, "as" is optional
<Badge as="default" variant="default">42</Badge>

// ... with progress and as success
<Badge variant="success" progress="complete">42</Badge>

// ... with icon
<Badge variant="default" prefixIcon={<div>🧪</div>}>42</Badge>

// ... with complex children in case you need custom styling
<Badge variant="default"><div><span className="whatever-class">42</span></div></Badge>

// Notification badge
<Badge as="notification" variant="default">42</Badge>

// ... with progress
<Badge as="notification" variant="critical" progress="partial">42</Badge>

// Dot badge, progress as mandatory
<Badge as="dot" progress="partial" variant="info" />
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
