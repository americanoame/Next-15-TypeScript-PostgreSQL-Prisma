import { useState, useEffect } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { getAllCategories } from '@/lib/actions/product.actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';


interface Category {
  category: string;
  _count: number;
}

const Search = () => {
  const [categories, setCategories] = useState<Category[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);  

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);  // Update state with fetched categories
      setLoading(false);  // Set loading to false once data is fetched
    };

    fetchCategories();
  }, []);  // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  return (
    <form action='/search' method='GET'>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Select name='category'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={'All'} value={'all'}>
              All
            </SelectItem>
            {categories.map((x) => (
              <SelectItem key={x.category} value={x.category}>
                {x.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name='q'
          type='text'
          placeholder='Search...'
          className='md:w-[100px] lg:w-[300px]'
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default Search;



