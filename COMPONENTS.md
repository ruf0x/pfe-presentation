# Presentation Component Architecture

A modular, reusable Next.js presentation framework built from the original HTML/JSX presentation files. This architecture provides a scalable way to manage slide-based presentations.

## 📁 Directory Structure

```
components/
├── common/                 # Reusable UI components
│   ├── BulletList.tsx
│   ├── ContentCard.tsx
│   ├── DataTable.tsx
│   ├── Quote.tsx
│   ├── SlideHeader.tsx
│   ├── StatBox.tsx
│   └── index.ts
├── slides/                 # Individual slide components
│   ├── TitleSlide.tsx
│   ├── ContentsSlide.tsx
│   ├── AlertFatigueSlide.tsx
│   ├── ObjectivesSlide.tsx
│   ├── FoundationSlide.tsx
│   ├── LLMStrategiesSlide.tsx
│   ├── StateOfArtSlide.tsx
│   ├── ArchitectureSlide.tsx
│   ├── DatasetSlide.tsx
│   ├── FinetuningSlide.tsx
│   ├── ResultsSlide.tsx
│   ├── ConclusionSlide.tsx
│   └── index.ts
├── PresentationComponent.tsx # Main orchestrator component
└── slides/
lib/
├── presentationData.ts    # Slide content data (centralized)
app/
└── page.tsx              # Main page (uses PresentationComponent)
```

## 🔧 Component Breakdown

### Common Components (Reusable UI Blocks)

#### `StatBox`

Displays statistics with optional highlighting.

```tsx
<StatBox number="99.39%" label="Classification Accuracy" />
```

#### `ContentCard`

Flexible card for content display with optional icons and highlighting.

```tsx
<ContentCard
  icon="🎯"
  title="Title"
  description="Description"
  highlight={false}
/>
```

#### `SlideHeader`

Standardized slide header with title and optional subtitle.

```tsx
<SlideHeader title="Slide Title" subtitle="Optional subtitle" />
```

#### `Quote`

Styled quote block.

```tsx
<Quote text="Quote text here" />
```

#### `DataTable`

Responsive table component.

```tsx
<DataTable headers={["Col1", "Col2"]} rows={[["data1", "data2"]]} />
```

#### `BulletList`

Ordered/unordered list with labels and descriptions.

```tsx
<BulletList
  items={[{ label: "Title", description: "Description" }]}
  ordered={false}
/>
```

### Slide Components

Each slide component is independent and reusable:

- **TitleSlide** - Title page with presenter info
- **ContentsSlide** - Contents/outline view
- **AlertFatigueSlide** - Problem statement with statistics
- **ObjectivesSlide** - Project objectives
- **FoundationSlide** - Foundation concepts (Wazuh & MITRE)
- **LLMStrategiesSlide** - LLM approaches with comparison table
- **StateOfArtSlide** - Literature review
- **ArchitectureSlide** - System architecture stages
- **DatasetSlide** - Dataset and preprocessing details
- **FinetuningSlide** - Model fine-tuning details
- **ResultsSlide** - Performance metrics
- **ConclusionSlide** - Conclusions and future work

### Main Component

**PresentationComponent.tsx** orchestrates all slides:

- Handles slide navigation (arrow keys, buttons)
- Manages slide state
- Renders appropriate slide based on type
- Provides fixed navigation bar and footer

### Data Layer

**presentationData.ts** contains all presentation content:

- Centralized slide data (12 slides total)
- Structured by slide type
- Easy to update content without modifying components
- Fully typed with TypeScript

## 🎨 Styling

- **Tailwind CSS** for all styling
- **Dark theme** with cyan accents and red highlights
- **Responsive design** for mobile and desktop
- **Consistent color scheme**:
  - Primary: Cyan-400 (`text-cyan-400`)
  - Secondary: Red-400 for warnings/highlights (`text-red-400`)
  - Background: Slate-800/900

## 🚀 Features

✅ **Modular Architecture** - Each component is independent and reusable
✅ **TypeScript** - Full type safety
✅ **Centralized Data** - All content in one file for easy updates
✅ **Keyboard Navigation** - Arrow keys to navigate slides
✅ **Responsive** - Works on mobile and desktop
✅ **Extensible** - Easy to add new slide types or components

## 📝 How to Use

### Adding a New Slide

1. Create new component in `components/slides/NewSlide.tsx`
2. Add slide object to `presentationData.ts`
3. Add case to switch statement in `PresentationComponent.tsx`

### Example: Adding a Custom Slide

```tsx
// components/slides/CustomSlide.tsx
export function CustomSlide({ title, content }: CustomSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      {/* Your content */}
    </div>
  );
}

// lib/presentationData.ts
{
  type: 'custom',
  title: 'My Custom Slide',
  content: '...'
}

// components/PresentationComponent.tsx
case 'custom':
  return <CustomSlide title={slide.title} content={slide.content} />;
```

## 🎯 Navigation

- **Next Slide**: Click "Next" button or press right arrow
- **Previous Slide**: Click "Back" button or press left arrow
- **Keyboard**: `ArrowRight` / `ArrowLeft`

## 📦 Dependencies

- `next` - React framework
- `react` - UI library
- `lucide-react` - Icons
- `tailwindcss` - Styling

## 💡 Key Benefits

1. **Separation of Concerns** - Content separated from presentation
2. **Reusability** - Components can be used across slides
3. **Maintainability** - Easy to update without touching components
4. **Scalability** - Easy to add new slide types
5. **Type Safety** - TypeScript ensures correctness
6. **Performance** - Optimized with Next.js

---

Built from the original presentation files and refactored for Next.js best practices.
