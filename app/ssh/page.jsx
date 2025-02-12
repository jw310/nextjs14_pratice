import dynamic from 'next/dynamic';
import { test, sshPost } from '@/actions/test';

const WebTerminal = dynamic(() => import('@/components/ssh/Webssh'), {
  ssr: false,
});

export default async function SshPage() {
  const { data } = await test();
  const { data: sshData } = await sshPost(data);

  return (
    <div>
      <WebTerminal ConnectionInfo={data} />
    </div>
  );
}
