"use client";
import React from 'react';
import { Card } from '@heroui/react';

const StatCard = ({ title, value, icon: Icon }) => {
    return (
        <Card
            variant="default"
            className="bg-[#18181b] border border-zinc-800 text-zinc-100 w-full rounded-2xl"
        >
            <Card.Content className="p-6 flex flex-col gap-4 min-h-[160px]">
                {/* Icon Container matching image_691abc.png structure */}
                <div className="w-10 h-10 rounded-xl bg-zinc-800/60 flex items-center justify-center text-zinc-300">
                    {Icon && <Icon className="w-5 h-5" />}
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-1">
                    <Card.Description className="text-zinc-400 text-sm font-medium m-0">
                        {title}
                    </Card.Description>
                    <Card.Title className="text-3xl font-semibold text-white m-0 tracking-tight">
                        {value}
                    </Card.Title>
                </div>
            </Card.Content>
        </Card>
    );
};

export default StatCard;