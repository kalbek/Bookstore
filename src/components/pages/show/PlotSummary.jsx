import React from "react";

const PlotSummary = () => (
  <>
    <div className="flex flex-col items-start w-full md:w-1/3">
      {/* plot summary */}
      <>
        <div className="   h-full flex flex-col items-start bg-lotion p-8 rounded-3xl gap-2">
          {/* title of the plot summary */}
          <div className="flex justify-between text-right whitespace-nowrap w-[100%]">
            <p className="text-black font-medium text-2xl">PLOT SUMMARY</p>
            <img
              srcSet="right-arrow.svg"
              alt=""
              className="rounded-2xl object-cover"
            />
          </div>
          {/* the plot summary */}
          <p className="text-black text-lg font-normal">
            In a hard-boiled city of crooks, grifts and rackets lurk a pair of
            toughs: Box and _____. They&apos;re the kind of men capable of
            extracting apologies and reparations, of teaching you a chilling
            lesson. They seldom think twice, and ask very few questions.Until
            one night over the poker table, they encounter a pulp writer with
            wild ideas and an unscrupulous private detective, leading them into
            what is either a classic mystery, a senseless maze of corpses, or an
            inextricable fever dream . . . Drunk on cinematic and literary
            influence, Muscle is a slice of noir fiction in collapse, a
            ceaselessly imaginative story of violence, boredom and madness.
          </p>
          <p className="text-black text-xl">
            <u>READ PREVIEW</u>
          </p>
        </div>
        <img
          srcSet="right-down.svg"
          alt=""
          className="rounded-2xl object-cover"
        />
      </>
      <>
        <div className=" w-full h-full flex flex-col items-start bg-lotion p-8 rounded-3xl gap-4 ">
          <div className="flex justify-between text-right whitespace-nowrap w-[100%]">
            <p className="text-black font-medium text-2xl">RECEPTION</p>
            <img srcSet="right-down.svg" alt="" className="object-cover" />
          </div>
        </div>
      </>
    </div>
  </>
);

export default PlotSummary;
