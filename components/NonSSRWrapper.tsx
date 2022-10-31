import dynamic from "next/dynamic";

const NonSSRWrapper = (props: { children: any }) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
