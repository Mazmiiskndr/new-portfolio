import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface UseImageLoaderProps {
  lightSrc: string; 
  darkSrc: string; 
}

export const useImageLoader = ({ lightSrc, darkSrc }: UseImageLoaderProps) => {
  const { theme, systemTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const src = currentTheme === 'dark' ? darkSrc : lightSrc;
    setImageSrc(src);
  }, [theme, systemTheme, lightSrc, darkSrc]);

  const handleLoad = () => {
    setLoading(false);
  };

  return { imageSrc, loading, handleLoad };
};
