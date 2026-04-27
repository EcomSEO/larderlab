import { Link } from "@/i18n/navigation";

/**
 * Recurring magazine department block. Eyebrow label, italic serif
 * heading, italic dek, then a numbered editorial pick list with
 * tomato italic numerals.
 */
export type DepartmentItem = {
  href: string;
  title: string;
  dek?: string;
};

export function Department({
  eyebrow,
  heading,
  dek,
  items,
}: {
  eyebrow: string;
  heading: string;
  dek?: string;
  items: DepartmentItem[];
}) {
  return (
    <div className="department">
      <div className="dept-label">{eyebrow}</div>
      <h2 className="font-display italic font-normal text-3xl md:text-[2.4rem] text-ink mt-3 leading-[1.06]">
        {heading}
      </h2>
      {dek && <p className="dek mt-3 max-w-[58ch]">{dek}</p>}
      <ul className="department-list mt-8">
        {items.map((item, i) => (
          <li key={item.href}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <Link href={item.href} className="title hover:text-tomato transition">
                {item.title}
              </Link>
              {item.dek && <div className="dek">{item.dek}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
