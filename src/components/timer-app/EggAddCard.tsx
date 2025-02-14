import { PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const EggAddCard = () => {
  return (
    <Button
      variant={'ghost'}
      className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
    >
      <PlusIcon />
    </Button>
  );
};
