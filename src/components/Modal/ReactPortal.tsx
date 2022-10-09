import ReactDOM from 'react-dom';

interface ReactPortalProps {
  children: React.ReactNode;
}

export default function ReactPortal({ children }: ReactPortalProps) {
  const container = document.getElementById('portal-root') as HTMLElement;

  return ReactDOM.createPortal(<div>{children}</div>, container);
}
