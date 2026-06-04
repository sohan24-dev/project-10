"use client";
import React from "react";
import StatCard from "./StatCard";

export const StatsGrid = ({ statsArray }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {statsArray.map((item) => (
                <StatCard
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};