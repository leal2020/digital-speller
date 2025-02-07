import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';

export interface EMGDataPoint {
  value: number;
  timestamp: number;
  formattedTime: string;
}

export interface WordEvent {
  word: string;
  timestamp: number;
}

interface DataContextType {
  emgData: EMGDataPoint[];
  wordEvents: WordEvent[];
  addEmgDataPoint: (data: EMGDataPoint) => void;
  addWordEvent: (event: WordEvent) => void;
}

// create empty context
const DataContext = createContext<DataContextType | undefined>(undefined);

// a provider that gives the context to children
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [emgData, setEmgData] = useState<EMGDataPoint[]>([]);
  const [wordEvents, setWordEvents] = useState<WordEvent[]>([]);

  const addEmgDataPoint = (data: EMGDataPoint) => {
    // Could also keep only last N data points if you wish
    setEmgData((prev) => [...prev, data]);
  };

  const addWordEvent = useCallback((event: WordEvent) => {
    setWordEvents((prev) => [...prev, event]);
  }, []);

  return (
    <DataContext.Provider
      value={{ emgData, wordEvents, addEmgDataPoint, addWordEvent }}
    >
      {children}
    </DataContext.Provider>
  );
};

// a custom hook for easy usage of the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
