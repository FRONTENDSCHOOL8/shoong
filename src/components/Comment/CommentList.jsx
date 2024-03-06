function CommentItem() {
  return (
    <article className="shadow flex flex-row my-2 rounded-md bg-white">
<img src="/icons/floatingDefault.jpg" className="h-42pxr aspect-square round-full"/>
<div className="flex flex-col flex-nowrap gap-x-1 ">
  <p className="text-left text-base font-bold">이방울<span className="text-m01 text-contentSecondary px-1">24.03.03</span></p>
  <p className="text-left">츄르가 맛있엇습니다</p>
</div>
    </article>
  )
}

export default function CommentList() {
  return (
    <div>
      <CommentItem />
      <CommentItem />
    </div>
  )
}