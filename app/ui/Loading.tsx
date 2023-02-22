export default function Loading() {
  const SkeletonItem = () => {
    return (
      <div className="items flex gap-[10px]">
        <div className="h-full w-[15%] bg-slate-200 animate-pulse rounded-md"></div>
        <div className="h-full w-[60%] bg-slate-200 animate-pulse rounded-md"></div>
        <div className="h-full w-[25%] bg-slate-200 animate-pulse rounded-md"></div>
      </div>
    );
  };

  const Skeleton = () => {
    const items = Array.from({ length: 15 }, (_, i) => (
      <SkeletonItem key={i} />
    ));
    return <main className="mainBar">{items}</main>;
  };
  return <Skeleton />;
}
