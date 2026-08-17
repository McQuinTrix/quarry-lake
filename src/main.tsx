import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Landmark, MapPin, Route } from "lucide-react";
import "./styles.css";

type LandmarkPoint = {
  id: string;
  name: string;
  shortLabel: string;
  note: string;
  x: number;
  y: number;
};

type Trail = {
  id: string;
  name: string;
  shortLabel: string;
  summary: string;
  path: string;
  color: string;
  landmarkIds: string[];
};

const landmarks: LandmarkPoint[] = [
  {
    id: "landmark-a",
    name: "Landmark A",
    shortLabel: "A",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 629.5,
    y: 679,
  },
  {
    id: "landmark-b",
    name: "Landmark B",
    shortLabel: "B",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 804.5,
    y: 576,
  },
  {
    id: "landmark-c",
    name: "Landmark C",
    shortLabel: "C",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 471.5,
    y: 731,
  },
  {
    id: "landmark-d",
    name: "Landmark D",
    shortLabel: "D",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 485,
    y: 723.5,
  },
  {
    id: "landmark-e",
    name: "Landmark E",
    shortLabel: "E",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 508,
    y: 700,
  },
  {
    id: "landmark-f",
    name: "Landmark F",
    shortLabel: "F",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 525.5,
    y: 674.5,
  },
  {
    id: "landmark-g",
    name: "Landmark G",
    shortLabel: "G",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 286,
    y: 519.5,
  },
  {
    id: "landmark-h",
    name: "Landmark H",
    shortLabel: "H",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 923,
    y: 665.5,
  },
  {
    id: "landmark-i",
    name: "Landmark I",
    shortLabel: "I",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 1168.5,
    y: 659.5,
  },
  {
    id: "landmark-j",
    name: "Landmark J",
    shortLabel: "J",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 1095.5,
    y: 747,
  },
  {
    id: "landmark-k",
    name: "Landmark K",
    shortLabel: "K",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 851,
    y: 909.5,
  },
  {
    id: "landmark-l",
    name: "Landmark L",
    shortLabel: "L",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 1068.5,
    y: 823,
  },
  {
    id: "landmark-m",
    name: "Landmark M",
    shortLabel: "M",
    note: "Placeholder landmark copied from your Figma ellipse layer.",
    x: 1139.5,
    y: 754,
  },
  {
    id: "landmark-n",
    name: "Landmark N",
    shortLabel: "N",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 647,
    y: 854,
  },
  {
    id: "landmark-o",
    name: "Landmark O",
    shortLabel: "O",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 706.5,
    y: 795.5,
  },
  {
    id: "landmark-p",
    name: "Landmark P",
    shortLabel: "P",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 675.5,
    y: 760.5,
  },
  {
    id: "landmark-q",
    name: "Landmark Q",
    shortLabel: "Q",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 689,
    y: 761,
  },
  {
    id: "landmark-r",
    name: "Landmark R",
    shortLabel: "R",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 666,
    y: 739,
  },
  {
    id: "landmark-s",
    name: "Landmark S",
    shortLabel: "S",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 634,
    y: 693,
  },
  {
    id: "landmark-t",
    name: "Landmark T",
    shortLabel: "T",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 814,
    y: 564,
  },
  {
    id: "landmark-u",
    name: "Landmark U",
    shortLabel: "U",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 827,
    y: 525,
  },
  {
    id: "landmark-v",
    name: "Landmark V",
    shortLabel: "V",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 627.5,
    y: 586.5,
  },
  {
    id: "landmark-w",
    name: "Landmark W",
    shortLabel: "W",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 423.5,
    y: 720.5,
  },
  {
    id: "landmark-x",
    name: "Landmark X",
    shortLabel: "X",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 792,
    y: 863,
  },
  {
    id: "landmark-y",
    name: "Landmark Y",
    shortLabel: "Y",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 584.5,
    y: 844.5,
  },
  {
    id: "landmark-z",
    name: "Landmark Z",
    shortLabel: "Z",
    note: "Placeholder landmark copied from your Figma circle layer.",
    x: 847.5,
    y: 543.5,
  },
  {
    id: "landmark-aa",
    name: "Landmark AA",
    shortLabel: "AA",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 1470,
    y: 383.5,
  },
  {
    id: "landmark-ab",
    name: "Landmark AB",
    shortLabel: "AB",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 841.5,
    y: 562.5,
  },
  {
    id: "landmark-ac",
    name: "Landmark AC",
    shortLabel: "AC",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 1273.5,
    y: 511.5,
  },
  {
    id: "landmark-ad",
    name: "Landmark AD",
    shortLabel: "AD",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 569.5,
    y: 682.5,
  },
  {
    id: "landmark-ae",
    name: "Landmark AE",
    shortLabel: "AE",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 515,
    y: 294.5,
  },
  {
    id: "landmark-af",
    name: "Landmark AF",
    shortLabel: "AF",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 475,
    y: 439,
  },
  {
    id: "landmark-ag",
    name: "Landmark AG",
    shortLabel: "AG",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 455.5,
    y: 578.5,
  },
  {
    id: "landmark-ah",
    name: "Landmark AH",
    shortLabel: "AH",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 467,
    y: 536,
  },
  {
    id: "landmark-ai",
    name: "Landmark AI",
    shortLabel: "AI",
    note: "Placeholder landmark copied from your latest Figma export.",
    x: 267.5,
    y: 607,
  },
];

const trails: Trail[] = [
  {
    id: "trail-01",
    name: "West Bank Loop",
    shortLabel: "01",
    summary:
      "A compact loop around the west-side lake edge and inner bend.",
    path: "M275 620L368.5 697L423 710.5L479.5 746.5M479.5 746.5L532.5 773.5L587 801L645 823H670.5L706.5 801L670.5 746.5L636.5 709L617.5 697V680L573.5 697L530.5 688.5L507 710.5L479.5 746.5Z",
    color: "#ffd84f",
    landmarkIds: [],
  },
  {
    id: "trail-02",
    name: "North Shore Loop",
    shortLabel: "02",
    summary:
      "A longer loop that runs up toward the northern shoreline before returning south.",
    path: "M429 378.5L438.5 348.5L451.5 356.5L460 375L468.5 408.5V446L464 479.5V504.5L456.5 527L464 556V586L478.5 618.5L501 639L518.5 664.5L535 689.5L527.5 697L512 712L492.5 733L473.5 752.5L456.5 742.5L429 727L404 712L375.5 697L352.5 684.5L293 634.5L252 603L237 586L244.5 570.5L262 551L275.5 532.5L293 509.5L311.5 492L323 479.5L346.5 465L360.5 451L387.5 428.5L411.5 408.5L429 378.5Z",
    color: "#b6ff5f",
    landmarkIds: [],
  },
  {
    id: "trail-03",
    name: "Rock Pond Circuit",
    shortLabel: "03",
    summary:
      "A rounded circuit through the upper pond area and back toward the lake cluster.",
    path: "M446 357.5L438.5 346.5L446 325.5L461.5 300.5L487 282.5L500 275.5L518.5 265L546 258L577 267.5L598.5 291.5V315.5V346.5L603.5 371.5L622 393.5L653 412.5L685.5 418.5L715.5 427.5L752 437.5L779 465L800 482.5L817.5 502L837.5 517.5V546L817.5 573.5L803 590.5L791.5 603L779 616L758 633.5L739.5 646.5L715.5 659L681.5 667L657 676.5L613 684.5L577 694.5H546L528.5 676.5L514.5 659L500 639L482.5 625.5L466 608.5V583.5V566L461.5 539.5L456.5 525L461.5 517.5L466 479.5V449.5V416.5V393.5V376.5L456.5 357.5H446Z",
    color: "#ff674f",
    landmarkIds: [],
  },
  {
    id: "trail-04",
    name: "Creek Bend Connector",
    shortLabel: "04",
    summary:
      "A connector-style route that links the upper paths with the south creek bend.",
    path: "M441 350L426.5 381.5L411.5 406.5L378 436L351.5 461L401 471L426.5 484.5L458.5 525L465 580.5V598.5L481 618.5L506 645.5L533.5 684.5L554.5 696.5L598 689.5L617 684.5M617 684.5L623 702L645.5 716.5L668.5 741.5L685.5 765.5L706.5 791.5L679.5 817.5L660.5 841.5L696.5 860L719.5 869L760.5 876H795.5L808 869H821.5H842.5H857.5L866.5 860H881.5H899H916.5L931.5 854H951H968.5L984.5 847.5L1000 836L1017 817.5L1037 807.5L1044.5 795.5L1050 791.5L1036 787.5L1017 782.5L994.5 765.5L968.5 741.5L951 709.5L938.5 684.5L926 645.5L921.5 608.5L899 580.5L866.5 559.5L842.5 548L821.5 565.5L800.5 591L775.5 618.5L741.5 645.5L702 661.5L668.5 670.5L636 678L617 684.5Z",
    color: "#56d6ff",
    landmarkIds: [],
  },
  {
    id: "trail-05",
    name: "Big Quarry Loop",
    shortLabel: "05",
    summary:
      "A broad loop that touches the north, west, and southern parts of the lake system.",
    path: "M423.5 386L439 348.5L449 329V309L465 299L489.5 282.5L508.5 276L547 265H567.5L590 287L599.5 305.5V335.5V371L623 393L663.5 419L711 427L758.5 442.5L793.5 473L828.5 506.5L836.5 526V549L859.5 558L890.5 578L921 604.5V625.5L938 663.5L951 709L969.5 742L1001.5 773L1026 789.5H1047L1036 808L1018 822.5L1001.5 832.5L980.5 846.5L958.5 856.5H938H921L900.5 862H878.5H865L844 868.5H828.5L803.5 874L787 879.5L740.5 874L702 862L670 846.5L650 839L623 822.5L590 808L562 789.5L527 773L489.5 752L453 730L423.5 709L382.5 700L352 685.5L316.5 655L281.5 625.5L257 604.5L237.5 588L244 578L267 543.5L291 512L316.5 486.5L339.5 467.5L365 449L399 419L423.5 386Z",
    color: "#ff9f1c",
    landmarkIds: [],
  },
  {
    id: "trail-06",
    name: "Small Pond Detour",
    shortLabel: "06",
    summary:
      "A shorter detour around the small upper pond area.",
    path: "M436.5 336.5L448.5 327L455.5 300L481.5 287L525 269.5L560 263L574 269.5L599.5 293.5L597.5 322.5L599.5 355.5V370.5L616 385L631.5 407L657 417L661.5 434.5L645 469L631.5 500.5L616 524M616 524L605 556L586.5 568L567.5 581L550 574.5L541 549.5V532.5L550 513H560L583 517.5L605 524H616Z",
    color: "#d972ff",
    landmarkIds: [],
  },
  {
    id: "trail-07",
    name: "South Pocket Loop",
    shortLabel: "07",
    summary:
      "A tight loop around the lower pocket of the west lake edge.",
    path: "M642.5 870L652.5 850L667 829L676.25 819.75M676.25 819.75L685.5 810.5L704 797V788L695.5 776L685.5 763L660.5 734.5L634 708L617.5 698V680.5L589.5 690L563.5 698L541 690H529L508 713.5L489.5 734.5L476.5 747.5L508 763L541 776L559 789.5L589.5 804.5L613 813.5L634 822.5H660.5L670 818L676.25 819.75Z",
    color: "#00d6a3",
    landmarkIds: [],
  },
  {
    id: "trail-08",
    name: "Cross-Park Walk",
    shortLabel: "08",
    summary:
      "A long cross-park walk from the west side toward the eastern edge.",
    path: "M247 616L300.5 656L367.5 700.5L432.5 729.5L475 750.5L526 779L582 805.5L647.5 836.5L697.5 861.5L757 877.5H799.5H859.5L905.5 871L972.5 854L1006 836.5L1044.5 799L1074.5 768L1103 742L1125.5 709.5L1163 674.5L1193 644.5L1232.5 616L1254 590L1285 580L1303.5 564H1327L1353.5 555L1363.5 535V516.5L1377 503V490.5H1394.5L1433 503L1441.5 481.5L1451.5 454.5L1459 433L1466.5 409.5",
    color: "#7c5cff",
    landmarkIds: [],
  },
  {
    id: "trail-09",
    name: "Full Creek Run",
    shortLabel: "09",
    summary:
      "The longest route, following the lower edge and stretching across the full map.",
    path: "M264.5 627.5L217 600L193.5 627.5L239.5 656L333 722L430 771.5L517 811.5L591.5 850L640.5 876L705 902.5L742.5 912.5H804.5H842L879 902.5H915.5L951.5 895L987.5 882.5L1016 866L1047 850L1069.5 824L1098 799L1124.5 771.5L1155.5 739.5L1185.5 710.5L1214 684.5L1245 656L1280 644.5L1329.5 636L1380.5 644.5L1424 656L1476.5 668.5H1532.5L1583.5 644.5L1627 627.5L1677 607.5L1710.5 585",
    color: "#ff77a8",
    landmarkIds: [],
  },
  {
    id: "trail-10",
    name: "North Pond Wrap",
    shortLabel: "10",
    summary:
      "A loop around the north pond area with a return through the west-side approach.",
    path: "M458.5 358.5L440 350L445 325L458.5 306.5L487 280L504.5 270L531 262.5H572L603 295V330V369.5L626.5 398.5L669 418.5L717.5 424.5L757 443L788.5 470.5L837 519V540L824.5 565L806 581.5L788.5 606L774.5 617.5L740 642L700 661L665 671L638 679.5L614 687H593L572 700.5H552L531 687L504.5 712L476 740.5L458.5 730.5L440 712L404 700.5H374L344 679.5L311.5 652L285.5 626L254.5 606L244.5 588.5L254.5 565L268 540L292 508L311.5 486.5L333 470.5H356.5H386.5L414 479L440 499L458.5 525.5L466 486.5V453V424.5V392L458.5 358.5Z",
    color: "#00b7ff",
    landmarkIds: [],
  },
];

type PanelTab = "trails" | "landmarks";

function App() {
  const [activeTab, setActiveTab] = useState<PanelTab>("trails");
  const [selectedTrailId, setSelectedTrailId] = useState(trails[0].id);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string | null>(null);
  const [hoveredTrailId, setHoveredTrailId] = useState<string | null>(null);
  const [hoveredLandmarkId, setHoveredLandmarkId] = useState<string | null>(null);

  const selectedTrail =
    trails.find((trail) => trail.id === selectedTrailId) ?? trails[0];
  const activeTrail =
    trails.find((trail) => trail.id === hoveredTrailId) ?? selectedTrail;

  const selectedLandmark = selectedLandmarkId
    ? landmarks.find((landmarkPoint) => landmarkPoint.id === selectedLandmarkId) ??
      null
    : null;

  const visibleLandmarkIds = new Set([
    ...selectedTrail.landmarkIds,
    ...(selectedLandmark ? [selectedLandmark.id] : []),
    ...(hoveredLandmarkId ? [hoveredLandmarkId] : []),
  ]);

  const trailsForSelectedLandmark = selectedLandmark
    ? trails.filter((trail) => trail.landmarkIds.includes(selectedLandmark.id))
    : [];

  const selectTrail = (trailId: string) => {
    setSelectedTrailId(trailId);
    setSelectedLandmarkId(null);
    setActiveTab("trails");
  };

  const selectLandmark = (landmarkId: string) => {
    setSelectedLandmarkId(landmarkId);
    setActiveTab("landmarks");
  };

  return (
    <main className="app-shell">
      <section className="map-explorer" aria-labelledby="page-title">
        <div className="map-pane">
          <div className="map-title">
            <p>Journey thru</p>
            <h1 id="page-title">Quarry Lakes</h1>
          </div>

          <svg
            className="map-scene"
            viewBox="0 0 2100 1200"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Quarry Lakes styled map with selectable trails and landmarks"
          >
            <image
              href="/assets/snazzy-image.png"
              x="0"
              y="0"
              width="2100"
              height="1200"
              preserveAspectRatio="xMidYMid meet"
            />

            <g className="trail-layer" aria-hidden="true">
              {trails.map((trail) => (
                <path
                  className={`trail-path ${
                    activeTrail.id === trail.id ? "is-active" : ""
                  } ${selectedTrail.id === trail.id ? "is-selected" : ""}`}
                  d={trail.path}
                  key={trail.id}
                  style={{ "--trail-color": trail.color } as React.CSSProperties}
                />
              ))}
            </g>

            {landmarks.map((landmarkPoint) => {
              const isVisible = visibleLandmarkIds.has(landmarkPoint.id);
              const isSelected = selectedLandmarkId === landmarkPoint.id;
              const isHovered = hoveredLandmarkId === landmarkPoint.id;
              return (
                <g
                  className={`landmark-marker ${isVisible ? "is-visible" : ""} ${
                    isSelected || isHovered ? "is-active" : ""
                  }`}
                  key={landmarkPoint.id}
                  role="button"
                  tabIndex={0}
                  aria-label={landmarkPoint.name}
                  transform={`translate(${landmarkPoint.x} ${landmarkPoint.y})`}
                  onClick={() => selectLandmark(landmarkPoint.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      selectLandmark(landmarkPoint.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredLandmarkId(landmarkPoint.id)}
                  onMouseLeave={() => setHoveredLandmarkId(null)}
                  onFocus={() => setHoveredLandmarkId(landmarkPoint.id)}
                  onBlur={() => setHoveredLandmarkId(null)}
                >
                  <circle className="landmark-hit-area" r="34" />
                  <circle className="landmark-ring" r="22" />
                  <circle className="landmark-dot" r="14" />
                  <text className="landmark-label" y="6" textAnchor="middle">
                    {landmarkPoint.shortLabel}
                  </text>
                  <text className="landmark-name" x="38" y="-28">
                    {landmarkPoint.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <aside className="side-panel" aria-label="Map controls">
          <div className="tabs" role="tablist" aria-label="Map content">
            <button
              className={activeTab === "trails" ? "is-active" : ""}
              role="tab"
              type="button"
              aria-selected={activeTab === "trails"}
              onClick={() => setActiveTab("trails")}
            >
              <Route aria-hidden="true" size={20} />
              Trails
            </button>
            <button
              className={activeTab === "landmarks" ? "is-active" : ""}
              role="tab"
              type="button"
              aria-selected={activeTab === "landmarks"}
              onClick={() => setActiveTab("landmarks")}
            >
              <Landmark aria-hidden="true" size={20} />
              Landmarks
            </button>
          </div>

          <div className="panel-content">
            {activeTab === "trails" ? (
              <>
                <div className="panel-heading">
                  <p>Pick a route</p>
                  <h2>Trails</h2>
                </div>
                <div className="card-list">
                  {trails.map((trail) => (
                    <article
                      className={`trail-card ${
                        selectedTrail.id === trail.id ? "is-selected" : ""
                      }`}
                      key={trail.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => selectTrail(trail.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          selectTrail(trail.id);
                        }
                      }}
                      onMouseEnter={() => setHoveredTrailId(trail.id)}
                      onMouseLeave={() => setHoveredTrailId(null)}
                      style={
                        { "--trail-color": trail.color } as React.CSSProperties
                      }
                    >
                      <div className="card-title">
                        <span>{trail.shortLabel}</span>
                        <strong>{trail.name}</strong>
                      </div>
                      <p>{trail.summary}</p>
                      <div className="chip-row" aria-label="Landmarks on trail">
                        {trail.landmarkIds.map((landmarkId) => {
                          const landmarkPoint = landmarks.find(
                            (item) => item.id === landmarkId,
                          );
                          if (!landmarkPoint) return null;
                          return (
                            <button
                              key={landmarkId}
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                selectLandmark(landmarkId);
                              }}
                              onMouseEnter={() => setHoveredLandmarkId(landmarkId)}
                              onMouseLeave={() => setHoveredLandmarkId(null)}
                            >
                              {landmarkPoint.shortLabel}
                            </button>
                          );
                        })}
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="panel-heading">
                  <p>Places on the map</p>
                  <h2>Landmarks</h2>
                </div>
                <div className="card-list">
                  {landmarks.map((landmarkPoint) => {
                    const relatedTrails = trails.filter((trail) =>
                      trail.landmarkIds.includes(landmarkPoint.id),
                    );
                    return (
                      <article
                        className={`landmark-card ${
                          selectedLandmarkId === landmarkPoint.id
                            ? "is-selected"
                            : ""
                        }`}
                        key={landmarkPoint.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => selectLandmark(landmarkPoint.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            selectLandmark(landmarkPoint.id);
                          }
                        }}
                        onMouseEnter={() => setHoveredLandmarkId(landmarkPoint.id)}
                        onMouseLeave={() => setHoveredLandmarkId(null)}
                      >
                        <div className="card-title">
                          <span>{landmarkPoint.shortLabel}</span>
                          <strong>{landmarkPoint.name}</strong>
                        </div>
                        <p>{landmarkPoint.note}</p>
                        <div className="related-trails">
                          {relatedTrails.map((trail) => (
                            <button
                              key={trail.id}
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                selectTrail(trail.id);
                              }}
                              style={
                                {
                                  "--trail-color": trail.color,
                                } as React.CSSProperties
                              }
                            >
                              {trail.shortLabel}
                            </button>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {selectedLandmark ? (
            <div className="selection-summary landmark-summary">
              <MapPin aria-hidden="true" size={21} />
              <div>
                <p>Selected landmark</p>
                <h2>{selectedLandmark.name}</h2>
                <span>
                  Trails:{" "}
                  {trailsForSelectedLandmark
                    .map((trail) => trail.shortLabel)
                    .join(", ")}
                </span>
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
