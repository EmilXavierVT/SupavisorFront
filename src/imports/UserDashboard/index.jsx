import svgPaths from "./svg-ggi64one61.js"
import imgSupavisorLogo1 from "./46917acae7ee7a9529490fdf4b9a963b0093d7b6.png"
import imgMorgendagensmaltidLogo1 from "./50d26da0d1b10c919282a9cbda684780efd597e6.png"

function LogOut({ className }) {
  return (
    <div
      className={className || "overflow-clip relative size-[48px]"}
      data-name="Log out"
    >
      <div className="absolute inset-[12.5%]" data-name="Icon">
        <div className="absolute inset-[-5.56%]">
          <svg
            className="block size-full"
            fill="none"
            height="40"
            preserveAspectRatio="none"
            viewBox="0 0 40 40"
            width="40"
          >
            <path
              d={svgPaths.p31e04980}
              id="Icon"
              stroke="#1E1E1E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col h-[154px] items-start pb-[8px] pt-[24px] px-[24px] relative shrink-0 w-[170px]"
      data-name="Heading 1"
    >
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[74px] top-[9px]"
        data-name="SUPAVISOR LOGO 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgSupavisorLogo1}
        />
      </div>
      <div
        className="absolute bottom-[31px] h-[46px] right-[15px] w-[138px]"
        data-name="MORGENDAGENSMÅLTID LOGO 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-[-0.45%] max-w-none size-full top-[-0.31%]"
            src={imgMorgendagensmaltidLogo1}
          />
        </div>
      </div>
    </div>
  )
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d="M15.75 3.75H2.25"
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M11.25 9H2.25"
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12.75 14.25H2.25"
            id="Vector_3"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full"
      data-name="NavItem"
    >
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Overview
      </p>
    </div>
  )
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d="M6 1.5V3.75"
            id="Vector"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 1.5V3.75"
            id="Vector_2"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p1a8e7980}
            id="Vector_3"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M2.25 6.75H15.75"
            id="Vector_4"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem1() {
  return (
    <div
      className="bg-white border border-[#e0e0db] border-solid content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2c2c2a] text-[14px] text-center whitespace-nowrap">
        Schedule
      </p>
    </div>
  )
}

function NavItemMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem1 />
    </div>
  )
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d={svgPaths.pd2eb480}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p9b1580}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p226d9800}
            id="Vector_3"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p19685c00}
            id="Vector_4"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem2() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Employees
      </p>
    </div>
  )
}

function NavItemMargin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0"
      data-name="NavItem:margin"
    >
      <NavItem2 />
    </div>
  )
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d={svgPaths.p278d4f80}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p11648c20}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 6.75H6"
            id="Vector_3"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 9.75H6"
            id="Vector_4"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 12.75H6"
            id="Vector_5"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem3() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Assignments
      </p>
    </div>
  )
}

function NavItemMargin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem3 />
    </div>
  )
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d={svgPaths.p29439780}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p18c84c80}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem4() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon4 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Locations
      </p>
    </div>
  )
}

function NavItemMargin3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem4 />
    </div>
  )
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g clipPath="url(#clip0_0_42)" id="Icon">
          <path
            d={svgPaths.p3dc49580}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M9 4.5V9L12 10.5"
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function NavItem5() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon5 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Availability
      </p>
    </div>
  )
}

function NavItemMargin4() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem5 />
    </div>
  )
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d="M6 1.5V3.75"
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 1.5V3.75"
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p1a8e7980}
            id="Vector_3"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M2.25 6.75H15.75"
            id="Vector_4"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem6() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon6 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Time Off
      </p>
    </div>
  )
}

function NavItemMargin5() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem6 />
    </div>
  )
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d={svgPaths.p278d4f80}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p11648c20}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 6.75H6"
            id="Vector_3"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 9.75H6"
            id="Vector_4"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 12.75H6"
            id="Vector_5"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem7() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[38px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon7 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Reports
      </p>
    </div>
  )
}

function NavItemMargin6() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="NavItem:margin"
    >
      <NavItem7 />
    </div>
  )
}

function Navigation() {
  return (
    <div
      className="content-stretch flex flex-col h-[602px] items-start overflow-clip p-[16px] relative shrink-0 w-full"
      data-name="Navigation"
    >
      <NavItem />
      <NavItemMargin />
      <NavItemMargin1 />
      <NavItemMargin2 />
      <NavItemMargin3 />
      <NavItemMargin4 />
      <NavItemMargin5 />
      <NavItemMargin6 />
    </div>
  )
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="18"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        width="18"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2802f40}
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p254f3200}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  )
}

function NavItem8() {
  return (
    <div
      className="border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[12px] h-[55px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[223px]"
      data-name="NavItem"
    >
      <Icon8 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Settings
      </p>
    </div>
  )
}

function Container1() {
  return (
    <div
      className="border-[#e0e0db] border-solid border-t content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full"
      data-name="Container"
    >
      <NavItem8 />
    </div>
  )
}

function Sidebar() {
  return (
    <div
      className="bg-[#f2f2ef] border-[#e0e0db] border-r border-solid content-stretch flex flex-col h-full items-start relative shrink-0 w-[171px]"
      data-name="Sidebar"
    >
      <Heading />
      <Navigation />
      <Container1 />
    </div>
  )
}

function Icon9() {
  return (
    <div
      className="absolute left-[12px] size-[16px] top-[11px]"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Icon">
          <path
            d="M14 14L11.1067 11.1067"
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p107a080}
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  )
}

function TextInput() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-black border-solid content-stretch flex flex-col h-[38px] items-start justify-center left-0 overflow-clip pl-[36px] pr-[16px] py-[8px] rounded-[12px] top-0 w-[256px]"
      data-name="Text Input"
    >
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(44,44,42,0.5)] w-full">
        Search assignment or staff...
      </p>
    </div>
  )
}

function Container4() {
  return (
    <div className="h-[38px] relative shrink-0 w-[256px]" data-name="Container">
      <Icon9 />
      <TextInput />
    </div>
  )
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Icon">
          <path
            d="M3.33333 8H12.6667"
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M8 3.33333V12.6667"
            id="Vector_2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  )
}

function IconMargin() {
  return (
    <div
      className="content-stretch flex items-start pr-[8px] relative shrink-0"
      data-name="Icon:margin"
    >
      <Icon10 />
    </div>
  )
}

function Button() {
  return (
    <div
      className="bg-[#343432] content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[12px] shrink-0"
      data-name="Button"
    >
      <IconMargin />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        New Assignment
      </p>
    </div>
  )
}

function Container3() {
  return (
    <div
      className="absolute content-stretch flex gap-[12px] items-center left-[748px] top-[21px]"
      data-name="Container"
    >
      <Container4 />
      <Button />
    </div>
  )
}

function Header() {
  return (
    <div
      className="bg-white border-[#e0e0db] border-b border-solid h-[80px] relative shrink-0 w-[1293px]"
      data-name="Header"
    >
      <Container3 />
      <LogOut className="absolute left-[1236px] overflow-clip size-[25px] top-[27px]" />
    </div>
  )
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Icon">
          <path
            d="M10 12L6 8L10 4"
            id="Vector"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  )
}

function Button1() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center p-[8px] relative shrink-0"
      data-name="Button"
    >
      <Icon11 />
    </div>
  )
}

function Button2() {
  return (
    <div
      className="border-[#e0e0db] border-l border-r border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2c2c2a] text-[14px] text-center whitespace-nowrap">
        Today
      </p>
    </div>
  )
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Icon">
          <path
            d="M6 12L10 8L6 4"
            id="Vector"
            stroke="#2C2C2A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  )
}

function Button3() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center p-[8px] relative shrink-0"
      data-name="Button"
    >
      <Icon12 />
    </div>
  )
}

function Container8() {
  return (
    <div
      className="bg-white border border-[#e0e0db] border-solid content-stretch flex h-[38px] items-center overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[132.953px]"
      data-name="Container"
    >
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  )
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[8px] relative shrink-0"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#2c2c2a] text-[16px] whitespace-nowrap">
        7–13 September 2026
      </p>
    </div>
  )
}

function Container7() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container8 />
      <Text />
    </div>
  )
}

function Button4() {
  return (
    <div
      className="bg-[#e8e8e5] content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2c2c2a] text-[14px] text-center whitespace-nowrap">
        Week (Assignments)
      </p>
    </div>
  )
}

function Button5() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Staff (Individuals)
      </p>
    </div>
  )
}

function Container9() {
  return (
    <div
      className="bg-white border border-[#e0e0db] border-solid content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex items-center p-[4px] relative rounded-[12px] shrink-0"
      data-name="Container"
    >
      <Button4 />
      <Button5 />
    </div>
  )
}

function Container6() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
      <Container9 />
    </div>
  )
}

function Text1() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start pr-[4px] relative shrink-0 w-[91px]"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] whitespace-nowrap">
        Active filters:
      </p>
    </div>
  )
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d="M9 3L3 9"
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 3L9 9"
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Button6() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0"
      data-name="Button"
    >
      <Icon13 />
    </div>
  )
}

function Text2() {
  return (
    <div
      className="bg-[#ee8a4e] border border-[#e0e0db] border-solid content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[33554400px] shrink-0"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2c2c2a] text-[12px] whitespace-nowrap">
        Kitchen staff
      </p>
      <Button6 />
    </div>
  )
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d="M9 3L3 9"
            id="Vector"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 3L9 9"
            id="Vector_2"
            stroke="#73736E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Button7() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0"
      data-name="Button"
    >
      <Icon14 />
    </div>
  )
}

function Text3() {
  return (
    <div
      className="bg-[#0496ff] border border-[#e0e0db] border-solid content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[33554400px] shrink-0"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2c2c2a] text-[12px] whitespace-nowrap">
        Cleaning staff
      </p>
      <Button7 />
    </div>
  )
}

function Button8() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] items-center justify-center pl-[8px] relative shrink-0 w-[54px]"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#73736e] text-[12px] text-center whitespace-nowrap">
        Clear all
      </p>
    </div>
  )
}

function Black() {
  return (
    <div className="absolute bg-black inset-0 opacity-5" data-name="Black" />
  )
}

function Button9() {
  return (
    <div
      className="bg-white border border-[#dcc] border-solid content-stretch flex gap-[5px] items-center justify-center px-[16px] py-[2px] relative rounded-[12px] shrink-0 w-[75px]"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2c2c2a] text-[12px] text-center whitespace-nowrap">{`Filters `}</p>
      <div
        className="relative rounded-[1000px] shrink-0 size-[17px]"
        data-name="Arrow Buttons"
      >
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-end relative size-full">
            <div
              className="absolute left-0 overflow-clip size-[24px] top-0"
              data-name="BG"
            >
              <Black />
            </div>
            <div
              className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-full relative text-[13px] text-[rgba(0,0,0,0.85)] text-center w-[min-content]"
              style={{
                fontVariationSettings: '"wdth" 100',
                fontFeatureSettings: '"ss15" 1',
              }}
            >
              <p className="leading-[normal]">{`\u{10018F}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Container10() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text1 />
      <Text2 />
      <Text3 />
      <Button8 />
      <Button9 />
    </div>
  )
}

function Container5() {
  return (
    <div
      className="bg-[#f9f9f7] border-[#e0e0db] border-b border-solid content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[20px] relative shrink-0"
      data-name="Container"
    >
      <Container6 />
      <Container10 />
    </div>
  )
}

function Container14() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid h-[44px] relative shrink-0 w-[80px]"
      data-name="Container"
    />
  )
}

function Container16() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-1 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Mon 7
      </p>
    </div>
  )
}

function Container17() {
  return (
    <div
      className="bg-[rgba(52,52,50,0.05)] border-[#e0e0db] border-r border-solid col-2 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#343432] text-[14px] text-center whitespace-nowrap">
        Tue 8
      </p>
    </div>
  )
}

function Container18() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-3 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Wed 9
      </p>
    </div>
  )
}

function Container19() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-4 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Thu 10
      </p>
    </div>
  )
}

function Container20() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-5 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Fri 11
      </p>
    </div>
  )
}

function Container21() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-6 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Sat 12
      </p>
    </div>
  )
}

function Container22() {
  return (
    <div
      className="col-7 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-stretch shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#73736e] text-[14px] text-center whitespace-nowrap">
        Sun 13
      </p>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="flex-[1147_0_0] grid grid-cols-[_______163.84px_163.86px_163.86px_163.86px_163.86px_163.86px_163.86px] grid-rows-[_44px] min-w-px relative self-stretch"
      data-name="Container"
    >
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  )
}

function Container13() {
  return (
    <div
      className="bg-[rgba(242,242,239,0.5)] border-[#e0e0db] border-b border-solid content-stretch flex items-start relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02)] shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
      <Container15 />
    </div>
  )
}

function Container25() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container26() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container27() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container28() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container29() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container30() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container31() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container32() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container33() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container34() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container35() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.609px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container36() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container37() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container38() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container39() {
  return (
    <div
      className="border-[rgba(224,224,219,0.5)] border-b border-solid h-[38.594px] relative shrink-0 w-[1227px]"
      data-name="Container"
    />
  )
}

function Container24() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 top-0"
      data-name="Container"
    >
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  )
}

function Container41() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.55px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        06:00
      </p>
    </div>
  )
}

function Container42() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[33.89px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        07:00
      </p>
    </div>
  )
}

function Container43() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.55px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        08:00
      </p>
    </div>
  )
}

function Container44() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.55px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        09:00
      </p>
    </div>
  )
}

function Container45() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.13px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        10:00
      </p>
    </div>
  )
}

function Container46() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[37.89px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        11:00
      </p>
    </div>
  )
}

function Container47() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.48px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        12:00
      </p>
    </div>
  )
}

function Container48() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.34px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        13:00
      </p>
    </div>
  )
}

function Container49() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        14:00
      </p>
    </div>
  )
}

function Container50() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.64px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        15:00
      </p>
    </div>
  )
}

function Container51() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.31px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        16:00
      </p>
    </div>
  )
}

function Container52() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[36.42px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        17:00
      </p>
    </div>
  )
}

function Container53() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.31px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        18:00
      </p>
    </div>
  )
}

function Container54() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.31px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        19:00
      </p>
    </div>
  )
}

function Container55() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.72px] not-italic text-[12px] text-[rgba(115,115,110,0.8)] top-[-10px] whitespace-nowrap">
        20:00
      </p>
    </div>
  )
}

function Container40() {
  return (
    <div
      className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.4)] border-[#e0e0db] border-r border-solid content-stretch flex flex-col items-start left-0 top-0 w-[80px]"
      data-name="Container"
    >
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
    </div>
  )
}

function Container57() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-5 h-[1275px] justify-self-stretch min-h-[1275px] relative row-1 self-start shrink-0"
      data-name="Container"
    />
  )
}

function Container58() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-6 h-[1275px] justify-self-stretch min-h-[1275px] relative row-1 self-start shrink-0"
      data-name="Container"
    />
  )
}

function Container59() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-7 h-[1275px] justify-self-stretch min-h-[1275px] relative row-1 self-start shrink-0"
      data-name="Container"
    />
  )
}

function Container62() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[10px] whitespace-nowrap">
        10:00 – 15:00
      </p>
    </div>
  )
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d={svgPaths.pbb9d080}
            id="Vector"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.5V6.5"
            id="Vector_2"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5H6.005"
            id="Vector_3"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Container61() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <Container62 />
      <Icon15 />
    </div>
  )
}

function Container63() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start overflow-clip pb-[2px] relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[12px] whitespace-nowrap">
        Catering - Event
      </p>
    </div>
  )
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#B26514"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#B26514"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container64() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon16 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[10px] whitespace-nowrap">
        CPH
      </p>
    </div>
  )
}

function ContainerMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container64 />
    </div>
  )
}

function Container66() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        SL
      </p>
    </div>
  )
}

function ContainerMargin1() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container66 />
    </div>
  )
}

function Container67() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        PK
      </p>
    </div>
  )
}

function ContainerMargin2() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container67 />
    </div>
  )
}

function Container68() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        MN
      </p>
    </div>
  )
}

function ContainerMargin3() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container68 />
    </div>
  )
}

function Container69() {
  return (
    <div
      className="bg-[#ffe2e2] border border-[#ffc9c9] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#e7000b] text-[8px] whitespace-nowrap">
        +1
      </p>
    </div>
  )
}

function Container65() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin1 />
      <ContainerMargin2 />
      <ContainerMargin3 />
      <Container69 />
    </div>
  )
}

function ContainerAlign() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
      data-name="Container:align"
    >
      <Container65 />
    </div>
  )
}

function CalendarAssignmentCard() {
  return (
    <div
      className="absolute bg-[rgba(255,244,229,0.95)] border border-[#ffd4a3] border-solid content-stretch flex flex-col h-[425px] items-start left-[4px] overflow-clip p-[10px] rounded-[8px] top-[340px] w-[154.859px]"
      data-name="CalendarAssignmentCard"
    >
      <Container61 />
      <Container63 />
      <ContainerMargin />
      <ContainerAlign />
    </div>
  )
}

function Container71() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#2a7c7c] text-[10px] whitespace-nowrap">
        16:00 – 20:00
      </p>
    </div>
  )
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d={svgPaths.pbb9d080}
            id="Vector"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.5V6.5"
            id="Vector_2"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5H6.005"
            id="Vector_3"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Container70() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <Container71 />
      <Icon17 />
    </div>
  )
}

function Container72() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start overflow-clip pb-[2px] relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#2a7c7c] text-[12px] whitespace-nowrap">
        Event Cleanup
      </p>
    </div>
  )
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#2A7C7C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#2A7C7C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container73() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon18 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#2a7c7c] text-[10px] whitespace-nowrap">
        CPH
      </p>
    </div>
  )
}

function ContainerMargin4() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container73 />
    </div>
  )
}

function Container75() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        MH
      </p>
    </div>
  )
}

function ContainerMargin5() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container75 />
    </div>
  )
}

function Container76() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        JB
      </p>
    </div>
  )
}

function ContainerMargin6() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container76 />
    </div>
  )
}

function Container77() {
  return (
    <div
      className="bg-[#ffe2e2] border border-[#ffc9c9] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#e7000b] text-[8px] whitespace-nowrap">
        +1
      </p>
    </div>
  )
}

function Container74() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin5 />
      <ContainerMargin6 />
      <Container77 />
    </div>
  )
}

function ContainerAlign1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
      data-name="Container:align"
    >
      <Container74 />
    </div>
  )
}

function CalendarAssignmentCard1() {
  return (
    <div
      className="absolute bg-[rgba(234,244,244,0.95)] border border-[#bce2e2] border-solid content-stretch flex flex-col h-[340px] items-start left-[4px] overflow-clip p-[10px] rounded-[8px] top-[850px] w-[154.859px]"
      data-name="CalendarAssignmentCard"
    >
      <Container70 />
      <Container72 />
      <ContainerMargin4 />
      <ContainerAlign1 />
    </div>
  )
}

function Container60() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-1 h-[1275px] justify-self-stretch min-h-[1275px] relative row-2 self-start shrink-0"
      data-name="Container"
    >
      <CalendarAssignmentCard />
      <CalendarAssignmentCard1 />
    </div>
  )
}

function Container78() {
  return (
    <div
      className="col-2 h-[1275px] justify-self-stretch min-h-[1275px] relative row-2 self-start shrink-0"
      data-name="Container"
    />
  )
}

function Container81() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[10px] whitespace-nowrap">
        08:00 – 15:30
      </p>
    </div>
  )
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d={svgPaths.pbb9d080}
            id="Vector"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.5V6.5"
            id="Vector_2"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5H6.005"
            id="Vector_3"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Container80() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <Container81 />
      <Icon19 />
    </div>
  )
}

function Container82() {
  return (
    <div
      className="content-stretch flex flex-col h-[30px] items-start overflow-clip relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[12px] w-[133px]">
        Office Lunch – Østerbro
      </p>
    </div>
  )
}

function ContainerMargin7() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container82 />
    </div>
  )
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#B26514"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#B26514"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container83() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon20 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#b26514] text-[10px] whitespace-nowrap">
        Østerbro
      </p>
    </div>
  )
}

function ContainerMargin8() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container83 />
    </div>
  )
}

function Container85() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        AJ
      </p>
    </div>
  )
}

function ContainerMargin9() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container85 />
    </div>
  )
}

function Container86() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        SL
      </p>
    </div>
  )
}

function ContainerMargin10() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container86 />
    </div>
  )
}

function Container87() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        PK
      </p>
    </div>
  )
}

function ContainerMargin11() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container87 />
    </div>
  )
}

function Container88() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        MN
      </p>
    </div>
  )
}

function ContainerMargin12() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container88 />
    </div>
  )
}

function Container89() {
  return (
    <div
      className="bg-[#ffe2e2] border border-[#ffc9c9] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#e7000b] text-[8px] whitespace-nowrap">
        +1
      </p>
    </div>
  )
}

function Container84() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin9 />
      <ContainerMargin10 />
      <ContainerMargin11 />
      <ContainerMargin12 />
      <Container89 />
    </div>
  )
}

function ContainerAlign2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
      data-name="Container:align"
    >
      <Container84 />
    </div>
  )
}

function CalendarAssignmentCard2() {
  return (
    <div
      className="absolute bg-[rgba(255,244,229,0.95)] border border-[#ffd4a3] border-solid content-stretch flex flex-col h-[637.5px] items-start left-[4px] overflow-clip p-[10px] rounded-[8px] top-[170px] w-[154.844px]"
      data-name="CalendarAssignmentCard"
    >
      <Container80 />
      <ContainerMargin7 />
      <ContainerMargin8 />
      <ContainerAlign2 />
    </div>
  )
}

function Container91() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[10px] whitespace-nowrap">
        06:30 – 12:00
      </p>
    </div>
  )
}

function Container90() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <Container91 />
    </div>
  )
}

function Container92() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start overflow-clip pb-[2px] relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[12px] whitespace-nowrap">{` Cleaning`}</p>
    </div>
  )
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#0496FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#0496FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container93() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon21 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[10px] whitespace-nowrap">
        HQ
      </p>
    </div>
  )
}

function ContainerMargin13() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container93 />
    </div>
  )
}

function Container95() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        MH
      </p>
    </div>
  )
}

function ContainerMargin14() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container95 />
    </div>
  )
}

function Container96() {
  return (
    <div
      className="bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        JB
      </p>
    </div>
  )
}

function Container94() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin14 />
      <Container96 />
    </div>
  )
}

function ContainerAlign3() {
  return (
    <div
      className="content-stretch flex flex-col h-[388px] items-start justify-end relative shrink-0 w-full"
      data-name="Container:align"
    >
      <Container94 />
    </div>
  )
}

function CalendarAssignmentCard3() {
  return (
    <div
      className="absolute bg-[rgba(234,244,244,0.95)] border border-[#0496ff] border-solid content-stretch flex flex-col h-[469px] items-start left-[4px] overflow-clip p-[10px] rounded-[8px] top-[45px] w-[155px]"
      data-name="CalendarAssignmentCard"
    >
      <Container90 />
      <Container92 />
      <ContainerMargin13 />
      <ContainerAlign3 />
    </div>
  )
}

function Container79() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-1 h-[1275px] justify-self-stretch min-h-[1275px] relative row-1 self-start shrink-0"
      data-name="Container"
    >
      <CalendarAssignmentCard2 />
      <CalendarAssignmentCard3 />
    </div>
  )
}

function Container99() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#ee8a4e] text-[10px] whitespace-nowrap">
        08:00 – 15:30
      </p>
    </div>
  )
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d={svgPaths.pbb9d080}
            id="Vector"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.5V6.5"
            id="Vector_2"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5H6.005"
            id="Vector_3"
            stroke="#FB2C36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Container98() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <Container99 />
      <Icon22 />
    </div>
  )
}

function Container100() {
  return (
    <div
      className="content-stretch flex flex-col h-[30px] items-start overflow-clip relative shrink-0 w-[132.859px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#ee8a4e] text-[12px] w-[133px]">
        Ungdomsøen
      </p>
    </div>
  )
}

function ContainerMargin15() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container100 />
    </div>
  )
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#EE8A4E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#EE8A4E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container101() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon23 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#ee8a4e] text-[10px] whitespace-nowrap">
        Ungdomsøen
      </p>
    </div>
  )
}

function ContainerMargin16() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container101 />
    </div>
  )
}

function Container103() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        AJ
      </p>
    </div>
  )
}

function ContainerMargin17() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container103 />
    </div>
  )
}

function Container104() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        SL
      </p>
    </div>
  )
}

function ContainerMargin18() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container104 />
    </div>
  )
}

function Container105() {
  return (
    <div
      className="bg-[#ffe2e2] border border-[#ffc9c9] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#e7000b] text-[8px] whitespace-nowrap">
        +3
      </p>
    </div>
  )
}

function Container102() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin17 />
      <ContainerMargin18 />
      <Container105 />
    </div>
  )
}

function ContainerAlign4() {
  return (
    <div
      className="content-stretch flex flex-col h-[336px] items-start justify-end relative shrink-0 w-full"
      data-name="Container:align"
    >
      <Container102 />
    </div>
  )
}

function CalendarAssignmentCard4() {
  return (
    <div
      className="absolute bg-[rgba(255,244,229,0.95)] border border-[#ee8a4e] border-solid content-stretch flex flex-col h-[441px] items-start left-[4.3px] overflow-clip p-[10px] rounded-[8px] top-[67px] w-[155px]"
      data-name="CalendarAssignmentCard"
    >
      <Container98 />
      <ContainerMargin15 />
      <ContainerMargin16 />
      <ContainerAlign4 />
    </div>
  )
}

function Container97() {
  return (
    <div
      className="border-[#e0e0db] border-r border-solid col-3 h-[1275px] justify-self-stretch min-h-[1275px] relative row-1 self-start shrink-0"
      data-name="Container"
    >
      <CalendarAssignmentCard4 />
    </div>
  )
}

function Container107() {
  return (
    <div
      className="content-stretch flex flex-col items-start opacity-80 relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[10px] whitespace-nowrap">
        06:00 – 11:45
      </p>
    </div>
  )
}

function Container106() {
  return (
    <div
      className="content-stretch flex h-[19px] items-start justify-between pb-[4px] relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <Container107 />
    </div>
  )
}

function Container108() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start overflow-clip pb-[2px] relative shrink-0 w-[132.844px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[12px] whitespace-nowrap">
        Cleaning
      </p>
    </div>
  )
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        width="10"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3f27c670}
            id="Vector"
            stroke="#0496FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p21cb9c80}
            id="Vector_2"
            stroke="#0496FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
        </g>
      </svg>
    </div>
  )
}

function Container109() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[15px] items-center opacity-80 overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon24 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#0496ff] text-[10px] whitespace-nowrap">
        Peter Bangs Vej 2, 2 th
      </p>
    </div>
  )
}

function ContainerMargin19() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container109 />
    </div>
  )
}

function Container111() {
  return (
    <div
      className="absolute bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[20px] top-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        MH
      </p>
    </div>
  )
}

function ContainerMargin20() {
  return (
    <div
      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[14px]"
      data-name="Container:margin"
    >
      <Container111 />
    </div>
  )
}

function Container112() {
  return (
    <div
      className="bg-[#f9f9f7] border border-[#e0e0db] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[20px]"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#2c2c2a] text-[8px] whitespace-nowrap">
        JB
      </p>
    </div>
  )
}

function Container110() {
  return (
    <div
      className="content-stretch flex h-[28px] items-start pt-[8px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContainerMargin20 />
      <Container112 />
    </div>
  )
}

function ContainerAlign5() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
      data-name="Container:align"
    >
      <Container110 />
    </div>
  )
}

function CalendarAssignmentCard5() {
  return (
    <div
      className="bg-[rgba(234,244,244,0.95)] border border-[#0496ff] border-solid col-2 content-stretch flex flex-col h-[488px] items-start overflow-clip p-[10px] relative rounded-[8px] row-1 self-start shrink-0 w-[155px]"
      data-name="CalendarAssignmentCard"
    >
      <Container106 />
      <Container108 />
      <ContainerMargin19 />
      <ContainerAlign5 />
    </div>
  )
}

function Container56() {
  return (
    <div
      className="absolute grid grid-cols-[_______163.84px_163.86px_163.86px_163.86px_163.86px_163.86px_163.86px] grid-rows-[__1275px_1275px] h-[1854px] left-[80px] top-0 w-[1147px]"
      data-name="Container"
    >
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container78 />
      <Container79 />
      <Container97 />
      <CalendarAssignmentCard5 />
    </div>
  )
}

function Container23() {
  return (
    <div
      className="bg-[#f9f9f7] flex-[579_0_0] min-h-px overflow-clip relative w-full"
      data-name="Container"
    >
      <Container24 />
      <Container40 />
      <Container56 />
    </div>
  )
}

function Container12() {
  return (
    <div
      className="bg-white border border-[#e0e0db] border-solid content-stretch flex flex-col h-[626px] items-start overflow-clip relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[1229px]"
      data-name="Container"
    >
      <Container13 />
      <Container23 />
    </div>
  )
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="Icon">
          <path
            d={svgPaths.pbb9d080}
            id="Vector"
            stroke="#C10007"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.5V6.5"
            id="Vector_2"
            stroke="#C10007"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5H6.005"
            id="Vector_3"
            stroke="#C10007"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

function Container113() {
  return (
    <div
      className="bg-[#ffe2e2] border border-[#ffc9c9] border-solid content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]"
      data-name="Container"
    >
      <Icon25 />
    </div>
  )
}

function Button10() {
  return (
    <div
      className="absolute bg-white border border-[#ffc9c9] border-solid content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex gap-[12px] items-center left-[1014.19px] pl-[8px] pr-[16px] py-[8px] rounded-[33554400px] top-[600px]"
      data-name="Button"
    >
      <Container113 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-center whitespace-nowrap">
        3 assignments need staff
      </p>
    </div>
  )
}

function Container11() {
  return (
    <div
      className="bg-[#f9f9f7] content-stretch flex flex-[626_0_0] flex-col items-start min-h-px overflow-clip p-[32px] relative w-[1293px]"
      data-name="Container"
    >
      <Container12 />
      <Button10 />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col h-[895px] items-start relative shrink-0"
      data-name="Container"
    >
      <Header />
      <Container5 />
      <Container11 />
    </div>
  )
}

function App() {
  return (
    <div
      className="bg-[#f9f9f7] content-stretch flex h-[895px] items-start overflow-clip relative shrink-0 w-full"
      data-name="App"
    >
      <Sidebar />
      <Container2 />
    </div>
  )
}

function Container() {
  return (
    <div
      className="bg-[#f9f9f7] content-stretch flex flex-col h-[895px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <App />
    </div>
  )
}

function Body() {
  return (
    <div
      className="bg-[#f9f9f7] content-stretch flex flex-col h-[895px] items-start relative shrink-0 w-full"
      data-name="Body"
    >
      <Container />
    </div>
  )
}

export default function UserDashboard() {
  return (
    <div
      className="bg-[#f9f9f7] content-stretch flex flex-col items-start relative size-full"
      data-name="User dashboard"
    >
      <Body />
    </div>
  )
}
