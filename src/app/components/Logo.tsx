import Image from 'next/image';

export default function Logo() {
  return (
    <Image src="/logo.png" alt="ShiftsApp" width={120} height={40} />
  );
}
