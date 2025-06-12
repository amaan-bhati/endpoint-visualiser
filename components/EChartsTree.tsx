"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
// import * as echarts from "echarts";

export default function EChartsTree() {
  const [option, setOption] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreeData = async () => {
      try {
        const res = await fetch(
          "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/flare.json"
        );
        const data = await res.json();

        // Collapse alternate nodes
        data.children.forEach((datum: any, index: number) => {
          if (index % 2 === 0) datum.collapsed = true;
        });

        const treeOption = {
          backgroundColor: "transparent",
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
          },
          series: [
            {
              type: "tree",
              data: [data],
              top: "1%",
              left: "7%",
              bottom: "1%",
              right: "20%",
              symbolSize: 7,
              label: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 10,
                color: "#ffffff",
              },
              leaves: {
                label: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left",
                  color: "#ffae00",
                },
              },
              emphasis: {
                focus: "descendant",
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#ff6a00" },
                    { offset: 1, color: "#ffae00" },
                  ],
                },
              },
            },
          ],
        };

        setOption(treeOption);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load tree data:", err);
      }
    };

    fetchTreeData();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {loading ? (
        <div className="text-white text-lg">Loading Tree Chart...</div>
      ) : (
        <ReactECharts
          option={option}
          style={{ height: "600px", width: "100%" }}
          opts={{ renderer: "canvas" }}
          theme="default"
        />
      )}
    </div>
  );
}
