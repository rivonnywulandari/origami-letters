import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete, onArchive, onRemove, onFlip }) {
  if (notes.length === 0) {
    return <p className="note-list__empty-message">There's no letter</p>;
  }


  return (
   <div className="note-list">
     {
       notes.map((note) => (
         <NoteItem 
         key={note.id} 
         id={note.id} 
         onDelete={onDelete} 
         onArchive={onArchive} 
         onRemove={onRemove} 
         onFlip={onFlip} 
         {...note} />
       ))
     }
   </div>
 );
}
 
export default NoteList;