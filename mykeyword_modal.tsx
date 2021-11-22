import React, { FunctionComponent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SwichButton from '../button/swichButton';


const NewsDetailModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="props.">
          <h5 class="modal-title">구독 키워드 관리</h5>
          //
          <h5 class="modal-title">구독 키워드 관리</h5>
          //
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <div className="modal-item">
          <div className="modal-item-images">
            <img width="100%" src={props.newsID ? "" : ""} alt="" />
          </div>
          <p className="modal-item-text">{props.newsContent}</p>
        </div>
        <ul className="toggle-list">
          {props.newsEntities.map(item => {
            console.log(props.newsEntities);
            let cID = item.length;
            let id = itemID(props.newsID, cID);
            return (
              <SwichButton isKeyword={false} btnName={item} id={id} />
            )
          })
          }
        </ul>

        //
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <dl class="my-keyword">
                <dt>나의 구독 키워드</dt>
                <dd>
                  <h6>외화동향</h6>
                  <div class="toggle-group">
                    <input id="11" class="checkbox-toggle toggle-switch" type="checkbox" />
                    <label for="11" data-on="ON" data-off="OFF"></label>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <dl class="my-keyword">
                <dt>새로운 구독 키워드</dt>
                <dd>
                  <h6>외화동향</h6>
                  <div class="toggle-group">
                    <input id="11" class="checkbox-toggle toggle-switch" type="checkbox" />
                    <label for="11" data-on="ON" data-off="OFF"></label>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        //

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>닫기</Button>

        //
        <div class="modal-footer">
          <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">취소</button>
          <button type="submit" class="btn btn-update">등록</button>
        </div>
        //

      </Modal.Footer>
    </Modal>
  );

  function itemID(mID: string, cID: number): string {
    return "item-keyword-" + mID + "-" + cID--;
  }

}

export default NewsDetailModal;
