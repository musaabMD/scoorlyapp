import React from 'react';
import { 
  Search, 
  Palette, 
  Image, 
  List, 
  Square, 
  Grid,
  CheckSquare 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

const viewTypes = [
  { id: 'grid', label: 'Grid View', icon: Grid },
  { id: 'images', label: 'Image Gallery', icon: Image },
  { id: 'flashcards', label: 'Flashcards', icon: Square },
  { id: 'list', label: 'List View', icon: List },
  { id: 'mcq', label: 'MCQ Practice', icon: CheckSquare },
];

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedTags,
  setSelectedTags,
  allTags,
  globalTheme,
  setGlobalTheme,
  themes,
  viewType,
  setViewType
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search notes..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* View Type Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              {viewTypes.find(v => v.id === viewType)?.icon && 
                React.createElement(viewTypes.find(v => v.id === viewType)?.icon, {
                  className: "h-4 w-4 mr-2"
                })
              }
              View As
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose View</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {viewTypes.map(({id, label, icon: Icon}) => (
              <DropdownMenuItem
                key={id}
                onClick={() => setViewType(id)}
                className="flex items-center"
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Subjects Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              Subjects
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {allTags.map(tag => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={(checked) =>
                  setSelectedTags(prev =>
                    checked
                      ? [...prev, tag]
                      : prev.filter(t => t !== tag)
                  )
                }
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Tags Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              Tags
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {allTags.map(tag => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={(checked) =>
                  setSelectedTags(prev =>
                    checked
                      ? [...prev, tag]
                      : prev.filter(t => t !== tag)
                  )
                }
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Palette className="h-4 w-4 mr-2" />
              Theme
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.keys(themes).map(theme => (
              <DropdownMenuItem
                key={theme}
                onClick={() => setGlobalTheme(theme)}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchAndFilter;