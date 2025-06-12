"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SunburstChart2 = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const data = {
      name: "flare",
      children: [
        {
          name: "analytics",
          children: [
            {
              name: "cluster",
              children: [
                { name: "AgglomerativeCluster", value: 3938 },
                { name: "CommunityStructure", value: 3812 },
                { name: "HierarchicalCluster", value: 6714 },
                { name: "MergeEdge", value: 743 },
              ],
            },
            {
              name: "graph",
              children: [
                { name: "BetweennessCentrality", value: 3534 },
                { name: "LinkDistance", value: 5731 },
                { name: "MaxFlowMinCut", value: 7840 },
                { name: "ShortestPaths", value: 5914 },
                { name: "SpanningTree", value: 3416 },
              ],
            },
            {
              name: "optimization",
              children: [
                { name: "AspectRatioBanker", value: 7074 }
              ],
            },
          ],
        },
        {
          name: "animate",
          children: [
            { name: "Easing", value: 17010 },
            { name: "FunctionSequence", value: 5842 },
            {
              name: "interpolate",
              children: [
                { name: "ArrayInterpolator", value: 1983 },
                { name: "ColorInterpolator", value: 2047 },
                { name: "DateInterpolator", value: 1375 },
                { name: "Interpolator", value: 8746 },
                { name: "MatrixInterpolator", value: 2202 },
                { name: "NumberInterpolator", value: 1382 },
                { name: "ObjectInterpolator", value: 1629 },
                { name: "PointInterpolator", value: 1675 },
                { name: "RectangleInterpolator", value: 2042 },
              ],
            },
            { name: "ISchedulable", value: 1041 },
            { name: "Parallel", value: 5176 },
            { name: "Pause", value: 449 },
            { name: "Scheduler", value: 5593 },
            { name: "Sequence", value: 5534 },
            { name: "Transition", value: 9201 },
            { name: "Transitioner", value: 19975 },
            { name: "TransitionEvent", value: 1116 },
            { name: "Tween", value: 6006 },
          ],
        },
        // You can add other large categories here: data, display, flex, physics, etc.
      ],
    };

    const option: echarts.EChartsOption = {
      title: {
        text: "Sunburst Chart - Flare",
        left: "center",
      },
      series: [
        {
          type: "sunburst",
          data: [data],
          radius: [0, "90%"],
          label: {
            rotate: "radial",
          },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: "600px" }}
    />
  );
};

export default SunburstChart2;
