/**
 *
 * @param {{
 *  groupName: string,
 *  memberName: string,
 *  infoClass: string,
 *  groupClass: string,
 *  memberClass: string,
 * }} props
 * @returns
 */


export default function ArtistInfo({ groupName, memberName, infoClass, groupClass, memberClass }) {
  return (
    <div className={infoClass}>
      <p className={groupClass}>{groupName}</p>
      <p className={memberClass}>{memberName}</p>
    </div>
  );
}
