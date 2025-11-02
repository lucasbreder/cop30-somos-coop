import React from 'react';

interface TitleProps {
  tag: 'h1' | 'h2' | 'p' | 'span'; 
  title: string;
  color?:string;
  titleLine: 'left' | 'center';
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ tag: Tag, title, color, titleLine, className }) => {
  
  return (
    <Tag className={`uppercase mb-2 ${className}`} style={{color: color, textAlign: titleLine || 'left'}}>
        {title}
        {titleLine === 'left' && 
        <svg viewBox="0 0 414.28 11.71">
          <polyline stroke={color} strokeWidth={2} fill='transparent' points="414.28 .46 70.8 .46 60.2 11.06 49.73 .6 0 .6"/>
        </svg>}
        {titleLine === 'center' && 
        <svg viewBox="0 0 287.5 11.71">
          <polyline stroke={color} strokeWidth={2} fill='transparent' points="287.5 .46 155.29 .46 144.69 11.06 134.23 .6 0 .6"/>
        </svg>}
    </Tag>
  );
};