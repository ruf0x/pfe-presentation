interface BulletListItem {
  label: string;
  description: string;
}

interface BulletListProps {
  items: BulletListItem[];
  ordered?: boolean;
}

export function BulletList({ items, ordered = false }: BulletListProps) {
  const ListComponent = ordered ? 'ol' : 'ul';

  return (
    <ListComponent className={`space-y-4 ${ordered ? 'list-decimal' : 'list-none'} ml-6`}>
      {items.map((item, i) => (
        <li key={i} className="text-gray-300 flex gap-3 group">
          {!ordered && <span className="text-cyan-400 font-bold mt-1">▸</span>}
          <div>
            <span className="font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
              {item.label}:
            </span>{' '}
            <span className="group-hover:text-gray-200 transition-colors">
              {item.description}
            </span>
          </div>
        </li>
      ))}
    </ListComponent>
  );
}
