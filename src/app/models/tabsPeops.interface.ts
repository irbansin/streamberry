interface TabsList {
  id: number;
  title: string;
  active: boolean;
}

export interface TabsProps {
  tabsList: TabsList[];
}
