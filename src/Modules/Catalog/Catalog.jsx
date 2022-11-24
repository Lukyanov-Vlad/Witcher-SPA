import '../../styles/media/mediaCatalog.css'
import '../../styles/catalog.css'
import { CatalogItems } from './components/CatalogItems'
import { Category } from './components/Category'
import catalogStore from '../../stores/CatalogStore/CatalogStore'
import { useEffect } from 'react'


export const Catalog=()=>{
   
    return (<main className="main padding_top">
        <div className="container">
            <h1 className='h1_text_title'>Магазин карт</h1>
            <Category />
            <CatalogItems />
        </div>
          
    </main>
    )
}