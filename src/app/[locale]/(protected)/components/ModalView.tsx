import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import Popup from '@/components/modal/Popup';
import ProgressModal from '@/components/modal/ProgressModal';
import Toast from '@/components/modal/Toast';
import Tooltip from '@/components/modal/Tooltip';
import ModalViewContent from '@/dummy/ModalViewContent';
import { useState } from 'react';

export default function ModalView() {
  const [isPopup1, setIsPopup1] = useState<boolean>(false);
  const [isPopup2, setIsPopup2] = useState<boolean>(false);
  const [isToast1, setIsToast1] = useState<boolean>(false);
  const [isToast2, setIsToast2] = useState<boolean>(false);
  const [isToast3, setIsToast3] = useState<boolean>(false);
  const [isToast4, setIsToast4] = useState<boolean>(false);
  const [isToast5, setIsToast5] = useState<boolean>(false);
  const [isToast6, setIsToast6] = useState<boolean>(false);
  const [isTooltip1, setIsTooltip1] = useState<boolean>(false);
  const [isTooltip2, setIsTooltip2] = useState<boolean>(false);
  const [isModal1, setIsModal1] = useState<boolean>(false);
  const [isModal2, setIsModal2] = useState<boolean>(false);
  const [isProgress1, setIsProgress1] = useState<boolean>(false);
  const [isProgress2, setIsProgress2] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4'>
      {/* Modal */}
      <h2> Modal </h2>
      <div className='border-1 border-grey-300 flex flex-col gap-4 rounded-s-lg p-4'>
        <div className='flex flex-wrap gap-12'>
          <Button value='Popup (One Button)' onClick={() => setIsPopup1(true)} />
          <Button value='Popup (Two Button)' onClick={() => setIsPopup2(true)} />
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button value='Modal (One Button)' onClick={() => setIsModal1(true)} style='outline' />
          <Button value='Modal (Two Button)' onClick={() => setIsModal2(true)} style='outline' />
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button value='Toast (Dark, Check)' onClick={() => setIsToast1(true)} style='secondary' />
          <Button
            value='Toast2 (Dark, Warn)'
            onClick={() => setIsToast2(!isToast2)}
            style='secondary'
          />
          <Button
            value='Toast3 (Dark, Info)'
            onClick={() => setIsToast3(!isToast3)}
            style='secondary'
          />
          <Button
            value='Toast4 (Light, Check)'
            onClick={() => setIsToast4(!isToast4)}
            style='secondary'
          />
          <Button
            value='Toast5 (Light, Warn)'
            onClick={() => setIsToast5(!isToast5)}
            style='secondary'
          />
          <Button
            value='Toast6 (Light, Info)'
            onClick={() => setIsToast6(!isToast6)}
            style='secondary'
          />
        </div>
        <div className='flex flex-wrap gap-12'>
          <div className='relative flex flex-1 justify-center'>
            <Button
              value='Tooltip (Dark)'
              onClick={() => setIsTooltip1(!isTooltip1)}
              style='tertiary'
            />
            {isTooltip1 && (
              <div className='bottom-13 absolute'>
                <Tooltip title='Title' detail='Detail' />
              </div>
            )}
          </div>
          <div className='relative flex flex-1 justify-center'>
            <Button
              value='Tooltip (Light)'
              onClick={() => setIsTooltip2(!isTooltip2)}
              style='tertiary'
            />
            {isTooltip2 && (
              <div className='bottom-13 absolute'>
                <Tooltip title='Title' detail='Detail' style='light' />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button value='ProgressModal (One Button)' onClick={() => setIsProgress1(!isProgress1)} />
          <Button value='ProgressModal (Two Button)' onClick={() => setIsProgress2(!isProgress2)} />
        </div>
      </div>

      <Popup title='Title' content='Description' visible={isPopup1} setVisible={setIsPopup1} />
      <Popup
        title='Title'
        content='Description'
        visible={isPopup2}
        setVisible={setIsPopup2}
        onCancel={() => setIsPopup2(false)}
      />

      <Toast text='Text' visible={isToast1} setVisible={setIsToast1} />
      <Toast text='Text' icon='warn' visible={isToast2} setVisible={setIsToast2} />
      <Toast text='Text' icon='info' visible={isToast3} setVisible={setIsToast3} />
      <Toast text='Text' style='light' visible={isToast4} setVisible={setIsToast4} />
      <Toast text='Text' icon='warn' style='light' visible={isToast5} setVisible={setIsToast5} />
      <Toast text='Text' icon='info' style='light' visible={isToast6} setVisible={setIsToast6} />

      <Modal
        visible={isModal1}
        setVisible={setIsModal1}
        title='Title'
        context={ModalViewContent()}
      />
      <Modal
        visible={isModal2}
        setVisible={setIsModal2}
        title='Title'
        context={ModalViewContent()}
        onCancel={() => setIsModal2(false)}
      />

      <ProgressModal
        visible={isProgress1}
        setVisible={setIsProgress1}
        title='Title'
        count={1}
        total={30}
      />
      <ProgressModal
        visible={isProgress2}
        setVisible={setIsProgress2}
        title='Title'
        count={10}
        total={30}
        handleSecondary={() => {
          return;
        }}
      />
    </div>
  );
}
