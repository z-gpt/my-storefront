"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsListContent = void 0;
const hooks_1 = require("preact/hooks");
const icons_1 = require("@adobe/elsie/icons");
const lib_1 = require("@adobe/elsie/lib");
const components_1 = require("@adobe/elsie/components");
const EmptyList_1 = __importDefault(require("../EmptyList"));
require("@/order/components/ReturnsListContent/ReturnsListContent.css");
const iconConfig = { size: '32', stroke: '2' };
const ReturnsListContent = ({ isOrderReturns = false, slots, pageInfo, withReturnsListButton = true, isMobile = false, returnsInMinifiedView = 1, translations = {}, returnOrderList = [], minifiedView = false, withHeader = true, withThumbnails = true, selectedPage = 1, handleSetSelectPage, routeReturnDetails, routeOrderDetails, routeTracking, routeReturnsList, routeProductDetails, }) => {
    const lastElementNumber = minifiedView
        ? returnsInMinifiedView
        : returnOrderList.length;
    const ImageTag = routeProductDetails?.() ? 'a' : 'span';
    const renderReturnOrders = (0, hooks_1.useMemo)(() => {
        return returnOrderList.slice(0, lastElementNumber).map((element, i) => (<components_1.Card key={i} variant="secondary" className="order-returns-list-content__cards-list">
        <div className="order-returns-list-content__cards-grid">
          <div className="order-returns-list-content__descriptions">
            {/* ODO - Return status will be fixed after https://jira.corp.adobe.com/browse/LYNX-591 */}
            <p>TBD</p>
            {!isOrderReturns ? (<p>
                {translations.orderNumber}{' '}
                <a href={routeOrderDetails?.(element.orderNumber) ?? '#'} target="_blank" rel="noreferrer">
                  {element.orderNumber}
                </a>
              </p>) : null}
            {element?.tracking?.map((track, index) => (<p key={`${track.trackingNumber}_${index}`}>
                {`${translations.carrier} ${track?.carrier?.label?.toLocaleUpperCase()}: `}
                <a href={`${routeTracking?.(track) || '#'}`} target="_blank" rel="noreferrer">
                  {track.trackingNumber}
                </a>
              </p>))}

            {slots?.ReturnItemsDetails ? (<lib_1.Slot data-testid="returnItemsDetails" name="ReturnItemsDetails" slot={slots?.ReturnItemsDetails} context={{ items: element.items }}/>) : element.items.length ? (<p>
                {element.items.length} {translations.itemsText}
              </p>) : null}
          </div>

          {withThumbnails ? (<components_1.ContentGrid maxColumns={isMobile ? 3 : 9} emptyGridContent={<></>} className={(0, lib_1.classes)([
                    'order-returns-list-content__images',
                    ['order-returns-list-content__images-3', isMobile],
                ])}>
              {element?.items?.map((item, index) => {
                    const orderItem = item.orderItem;
                    const label = orderItem.thumbnail?.label;
                    const url = orderItem.thumbnail?.url;
                    return (<ImageTag key={index + item.uid} href={routeProductDetails?.(item.orderItem) ?? '#'}>
                    <components_1.Image alt={label} src={url} width={85} height={114}/>
                  </ImageTag>);
                })}
            </components_1.ContentGrid>) : null}
          {slots?.DetailsActionParams ? (<lib_1.Slot className="order-returns-list-content__actions" data-testid="detailsActionParams" name="DetailsActionParams" slot={slots?.DetailsActionParams} context={{ returnOrderItem: element }}/>) : (<a href={routeReturnDetails?.({
                    token: element.token,
                    orderNumber: element.orderNumber,
                }) ?? '#'} className="order-returns-list-content__actions">
              <components_1.Icon source={icons_1.ChevronRight} {...iconConfig}/>
            </a>)}
        </div>
      </components_1.Card>));
    }, [
        returnOrderList,
        lastElementNumber,
        translations,
        slots,
        withThumbnails,
        isMobile,
        routeOrderDetails,
        routeReturnDetails,
        routeTracking,
        routeProductDetails,
        ImageTag,
        isOrderReturns,
    ]);
    const renderMinifiedView = (0, hooks_1.useMemo)(() => (<>
        {withHeader ? (<components_1.Header title={translations.minifiedViewTitle} divider={false}/>) : null}
        {renderReturnOrders}
        <EmptyList_1.default minifiedView={minifiedView} typeList="orders" isEmpty={!returnOrderList.length} message={translations.emptyOrdersListMessage}/>
        {withReturnsListButton ? (<a className="order-returns-list-content__actions" href={routeReturnsList?.() ?? '#'}>
            <components_1.Card variant="secondary" className="order-returns-list-content__card">
              <div className={'order-returns-list-content__card-wrapper'}>
                <p>{translations.viewAllOrdersButton}</p>
                <components_1.Icon source={icons_1.ChevronRight} {...iconConfig}/>
              </div>
            </components_1.Card>
          </a>) : null}
      </>), [
        routeReturnsList,
        withReturnsListButton,
        withHeader,
        translations,
        renderReturnOrders,
        minifiedView,
        returnOrderList.length,
    ]);
    const renderFullSizeView = (0, hooks_1.useMemo)(() => (<>
        {withHeader ? (<components_1.Header title={translations.minifiedViewTitle} divider={false}/>) : null}
        <EmptyList_1.default minifiedView={minifiedView} typeList="orders" isEmpty={!returnOrderList.length} message={translations.emptyOrdersListMessage}/>
        {renderReturnOrders}
        {pageInfo?.totalPages > 1 ? (<components_1.Pagination totalPages={pageInfo?.totalPages} currentPage={selectedPage} onChange={handleSetSelectPage}/>) : null}
      </>), [
        withHeader,
        translations,
        minifiedView,
        returnOrderList.length,
        renderReturnOrders,
        pageInfo?.totalPages,
        selectedPage,
        handleSetSelectPage,
    ]);
    return (<div className="order-returns-list-content">
      {minifiedView ? renderMinifiedView : renderFullSizeView}
    </div>);
};
exports.ReturnsListContent = ReturnsListContent;
