import members from '../data/members.json';
import SectionHeader from '../components/SectionHeader.jsx';
import MemberCard from '../components/MemberCard.jsx';

export default function MembersPage() {
  return (
    <section>
      <SectionHeader title="Group Members" subtitle={`Our ${members.length} little friends`} />
      <div className="grid grid--members">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
