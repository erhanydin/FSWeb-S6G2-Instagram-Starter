import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  // console.log(gonderiler);

  return (
    <div className='posts-container-wrapper'>
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/
        gonderiler.map((x) => (
          <Gönderi gönderi={x} gonderiyiBegen = {gonderiyiBegen} key={x.id}/>
        ))
      }
      

      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
