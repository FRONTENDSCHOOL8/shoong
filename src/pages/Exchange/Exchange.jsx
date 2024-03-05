import PhocaContainerEx from "@/components/PhocaContainer/PhocaContainerEx";
import NavBar from '@/components/NavBar/NavBar';


export default function Exchange() {
  return <div>Exchange
    <PhocaContainerEx
      titleClass="w-150pxr overflow-hidden whitespace-nowrap truncate text-m03 font-m03 text-gray600 text-left "
      imgClass="mb-2 w-150pxr h-215pxr rounded-xl relative"
      logoImgClass="w-8 h-8 rounded-full object-cover mt-1"
      infoClass="flex flex-col items-start mb-1"
      groupClass="text-sb01 font-sb01 text-contentSecondary"
      memberClass="text-sb01 font-sb01 text-contentSecondary"
      linkClass="flex flex-col items-center justify-center cursor-pointer hover:scale-95 transition-transform duration-300 w-158pxr h-312pxr bg-gray-100 rounded-xl"
    />
    <NavBar />
  </div>;
}
