import { formatDate } from '../utils/format.js';

/** A group member card: round avatar, name, totem, birthday and parent contact. */
export default function MemberCard({ member }) {
  const { name, totem, icon, birthday, parentName, parentPhone } = member;
  return (
    <article className="card member-card">
      <img className="member-card__icon" src={icon} alt={`${name}'s totem: ${totem}`} loading="lazy" />
      <h3>{name}</h3>
      <span className="chip">{totem}</span>
      <dl className="member-card__details">
        <div>
          <dt>🎂 Birthday</dt>
          <dd>{formatDate(birthday)}</dd>
        </div>
        <div>
          <dt>👤 Parent</dt>
          <dd>{parentName}</dd>
        </div>
        <div>
          <dt>📞 Phone</dt>
          {/* Strip spaces so the tel: link dials correctly. */}
          <dd><a href={`tel:${parentPhone.replace(/\s/g, '')}`}>{parentPhone}</a></dd>
        </div>
      </dl>
    </article>
  );
}
