export default function Loading() {
  const SkeletonItem = () => {
    return (
      <div className="items flex h-36 mb-6">
        <div className="h-full w-[15%] bg-slate-200 animate-pulse rounded-md"></div>
        <div className="h-full w-[60%] bg-slate-200 animate-pulse rounded-md"></div>
        <div className="h-full w-[25%] bg-slate-200 animate-pulse rounded-md"></div>
      </div>
    );
  };

  const Skeleton = () => {
    const items = Array.from({ length: 20 }, (_, i) => (
      <SkeletonItem key={i} />
    ));
    return <main className="mt-28">{items}</main>;
  };
  return <Skeleton />;
}
