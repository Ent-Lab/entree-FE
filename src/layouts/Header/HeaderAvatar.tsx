import defaultProfile from '@/assets/images/defaultProfile.jpeg';

import Avatar from "@/components/Avatar/Avatar";

export default function HeaderAvatar() {
  return (
    <Avatar src={defaultProfile} size={'md'} />
  );
};
