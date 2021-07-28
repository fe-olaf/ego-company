import { useEffect } from 'react'
import classnames from 'classnames/bind'

import { Beige } from '$types/theme'
import LinkButton from '$shared/bedge/LinkButton'

import styles from './Map.module.scss'

const cx = classnames.bind(styles)

declare namespace naver.maps {
  type Coord = Point | LatLng
  type PointArrayLiteral = [number, number]
  type PointLiteral = PointArrayLiteral | PointObjectLiteral
  type LatLngLiteral = PointLiteral | LatLngObjectLiteral
  type Bounds = PointBounds | LatLngBounds
  type SizeArrayLiteral = [number, number]
  type PointBoundsArrayLiteral = [number, number, number, number]
  type PointBoundsLiteral = PointBoundsArrayLiteral | PointBoundsObjectLiteral
  type LatLngBoundsLiteral = PointBoundsLiteral | LatLngBoundsObjectLiteral
  type SizeLiteral = SizeArrayLiteral | SizeObjectLiteral
  type CoordLiteral = PointLiteral | LatLngLiteral
  type BoundsLiteral = PointBoundsLiteral | LatLngBoundsLiteral

  interface Margin {
    top?: number | undefined
    right?: number | undefined
    bottom?: number | undefined
    left?: number | undefined
  }

  interface MarkerOptions {
    animation?: any
    map?: Map | undefined
    position?: any
    icon?: any
    shape?: any
    title?: string | undefined
    cursor?: string | undefined
    clickable?: boolean | undefined
    draggable?: boolean | undefined
    visible?: boolean | undefined
    zIndex?: number | undefined
  }

  interface PointObjectLiteral {
    x: number
    y: number
  }

  interface SizeObjectLiteral {
    width: number
    height: number
  }

  interface TransitionOptions {
    duration?: number | undefined
    easing?: string | undefined
  }

  interface LatLngObjectLiteral {
    lat: number
    lng: number
  }

  interface PointBoundsObjectLiteral {
    minX: number
    minY: number
    maxX: number
    maxY: number
  }

  interface LatLngBoundsObjectLiteral {
    north: number
    east: number
    south: number
    west: number
  }

  interface MapEventListener {
    eventName: string
    listener: (event: any) => any
    listenerId: string
    target: any
  }

  interface Projection {
    fromCoordToPoint(coord: Coord): Point
    fromPointToCoord(point: Point): Coord
  }

  interface MapOptions {
    background?: string | undefined
    baseTileOpacity?: number | undefined
    bounds?: any
    center?: any
    disableDoubleClickZoom?: boolean | undefined
    disableDoubleTapZoom?: boolean | undefined
    disableKineticPan?: boolean | undefined
    disableTwoFingerTapZoom?: boolean | undefined
    draggable?: boolean | undefined
    keyboardShortcuts?: boolean | undefined
    logoControl?: boolean | undefined
    logoControlOptions?: any
    mapDataControl?: boolean | undefined
    mapDataControlOptions?: any
    mapTypeControl?: boolean | undefined
    mapTypeControlOptions?: any
    mapTypeId?: string | undefined
    mapTypes?: any
    maxBounds?: any
    maxZoom?: number | undefined
    minZoom?: number | undefined
    padding?: any
    pinchZoom?: boolean | undefined
    resizeOrigin?: any
    scaleControl?: boolean | undefined
    scaleControlOptions?: any
    scrollWheel?: boolean | undefined
    size?: any
    overlayZoomEffect?: null | string | undefined
    tileSpare?: number | undefined
    tileTransition?: boolean | undefined
    useStyleMap?: boolean | undefined
    zoom?: number | undefined
    zoomControl?: boolean | undefined
    zoomControlOptions?: any
    zoomOrigin?: any
  }

  enum SymbolPath {
    BACKWARD_CLOSED_ARROW = 1,
    BACKWARD_OPEN_ARROW,
    CIRCLE,
    FORWARD_CLOSED_ARROW,
    FORWARD_OPEN_ARROW,
  }

  enum Position {
    CENTER = 0,
    TOP_LEFT,
    TOP_CENTER,
    TOP_RIGHT,
    LEFT_CENTER,
    LEFT_TOP,
    LEFT_BOTTOM,
    RIGHT_TOP,
    RIGHT_CENTER,
    RIGHT_BOTTOM,
    BOTTOM_LEFT,
    BOTTOM_CENTER,
    BOTTOM_RIGHT,
  }

  interface MapPanes {
    overlayLayer: HTMLElement
    overlayImage: HTMLElement
    floatPane: HTMLElement
  }

  interface MarkerShape {
    coords: any[]
    type: string
  }

  type SymbolStyle = string
  namespace SymbolStyle {
    let CIRCLE: string
    let PATH: string
    let CLOSED_PATH: string
  }

  interface HtmlIcon {
    content: string | HTMLElement
    size?: Size | SizeLiteral | undefined
    anchor?: Point | PointLiteral | Position | undefined
  }

  interface SymbolIcon {
    path: SymbolPath | Point[] | PointLiteral[]
    style?: SymbolStyle | undefined
    radius?: number | undefined
    fillColor?: string | undefined
    fillOpacity?: number | undefined
    strokeColor?: string | undefined
    strokeWeight?: number | undefined
    strokeOpacity?: number | undefined
    anchor?: Point | PointLiteral | Position | undefined
  }

  interface ImageIcon {
    url: string
    size?: Size | SizeLiteral | undefined
    scaledSize?: Size | SizeLiteral | undefined
    origin?: Point | PointLiteral | undefined
    anchor?: Point | PointLiteral | Position | undefined
  }

  class PointBounds {
    constructor(minPoint: Point, maxPoint: Point)

    static bounds(
      point: Coord | PointLiteral,
      pointN: Coord | PointLiteral,
    ): PointBounds

    clone(): PointBounds

    equals(bounds: Bounds | PointBoundsLiteral): boolean

    extend(point: Coord | PointLiteral): PointBounds

    getCenter(): Point

    getMax(): Point

    getMin(): Point

    hasBounds(bounds: Bounds | PointBoundsLiteral): boolean

    hasPoint(point: Coord | PointLiteral): boolean

    intersects(bounds: Bounds | PointBoundsLiteral): boolean

    maxX(): number

    maxY(): number

    minX(): number

    minY(): number

    toString(): string

    union(bounds: Bounds | PointBoundsLiteral): PointBounds
  }

  class LatLngBounds extends PointBounds {
    constructor(sw: LatLng, ne: LatLng)

    static bounds(
      latlng: Coord | LatLngLiteral,
      latlngN: Coord | LatLngLiteral,
    ): LatLngBounds

    clone(): LatLngBounds

    east(): number

    equals(bounds: Bounds | LatLngBoundsLiteral): boolean

    extend(latlng: Coord | LatLngLiteral): LatLngBounds

    getCenter(): LatLng

    getNE(): LatLng

    getSW(): LatLng

    hasLatLng(latlng: Coord | LatLngLiteral): boolean

    intersects(bounds: Bounds | LatLngBoundsLiteral): boolean

    north(): number

    south(): number

    toPointBounds(): PointBounds

    union(bounds: Bounds | LatLngBoundsLiteral): LatLngBounds

    west(): number
  }

  class Point {
    constructor(x: number, y: number)

    add(point: Coord | PointLiteral): Point

    add(x: number, y: number): Point

    ceil(): Point

    clone(): Point

    div(point: Coord | PointLiteral): void

    div(x: number, y: number): Point

    equals(point: Point): boolean

    floor(): Point

    mul(point: Coord | PointLiteral): Point

    mul(x: number, y: number): Point

    round(): Point

    sub(point: Coord | PointLiteral): Point

    sub(x: number, y: number): Point

    toString(): string
  }

  class LatLng extends Point {
    constructor(lat: number, lng: number)

    clone(): LatLng

    destinationPoint(angle: number, meter: number): LatLng

    equals(point: Coord | LatLngLiteral): boolean

    lat(): number

    lng(): number

    toPoint(): Point

    toString(): string
  }

  class KVO {
    constructor()

    addListener(eventName: any, listener: () => any): MapEventListener

    addListenerOnce(eventName: any, listener: () => any): MapEventListener

    bindTo(key: string, target: KVO, targetKey?: string): void

    clearListeners(eventName: string): void

    get(key: string): any

    hasListener(eventName: string): boolean

    removeListener(listeners: MapEventListener | MapEventListener[]): void

    set(key: string, value: any, silently?: boolean): void

    setValues(properties: any): void

    trigger(eventName: string, eventObject?: any): void

    unbind(key: string): void

    unbindAll(): void
  }

  interface MapSystemProjection extends KVO {
    factor(zoom: number): number
    fromCoordToOffset(coord: Coord): Point
    fromCoordToPoint(coord: Coord): Point
    fromOffsetToCoord(offset: Point): Coord
    fromOffsetToPoint(offset: Point): Point
    fromPointToCoord(point: Point): Coord
    fromPointToOffset(point: Point): Point
    getDestinationCoord(fromCoord: Coord, angle: number, meter: number): Coord
    getDistance(coord1: Coord, coord2: Coord): number
    getProjectionName(): number
    scaleDown(
      operand: number | Point | Size,
      zoom: number,
    ): number | Point | Size
    scaleUp(operand: number | Point | Size, zoom: number): number | Point | Size
  }
  interface MapOptions {
    background?: string | undefined
    baseTileOpacity?: number | undefined
    bounds?: any
    center?: any
    disableDoubleClickZoom?: boolean | undefined
    disableDoubleTapZoom?: boolean | undefined
    disableKineticPan?: boolean | undefined
    disableTwoFingerTapZoom?: boolean | undefined
    draggable?: boolean | undefined
    keyboardShortcuts?: boolean | undefined
    logoControl?: boolean | undefined
    logoControlOptions?: any
    mapDataControl?: boolean | undefined
    mapDataControlOptions?: any
    mapTypeControl?: boolean | undefined
    mapTypeControlOptions?: any
    mapTypeId?: string | undefined
    mapTypes?: any
    maxBounds?: any
    maxZoom?: number | undefined
    minZoom?: number | undefined
    padding?: any
    pinchZoom?: boolean | undefined
    resizeOrigin?: any
    scaleControl?: boolean | undefined
    scaleControlOptions?: any
    scrollWheel?: boolean | undefined
    size?: any
    overlayZoomEffect?: null | string | undefined
    tileSpare?: number | undefined
    tileTransition?: boolean | undefined
    useStyleMap?: boolean | undefined
    zoom?: number | undefined
    zoomControl?: boolean | undefined
    zoomControlOptions?: any
    zoomOrigin?: any
  }

  class Size {
    width: number

    height: number

    constructor(width: number, height: number)

    add(size: Size | SizeLiteral): Size

    add(width: number, height: number): Size

    ceil(): Size

    clone(): Size

    div(width: number, height: number): Size

    div(size: Size | SizeLiteral): Size

    equals(size: Size | SizeLiteral): boolean

    floor(): Size

    mul(size: Size | SizeLiteral): Size

    mul(width: number, height: number): Size

    round(): Size

    sub(size: Size | SizeLiteral): Size

    sub(width: number, height: number): Size

    toString(): string
  }

  class Map extends KVO {
    controls: any

    data: any

    layers: any

    mapTypes: any

    mapSystemProjection: any

    constructor(mapDiv: string | HTMLElement, mapOptions?: MapOptions)

    addPane(name: string, elementOrIndex: HTMLElement | number): void

    destroy(): void

    fitBounds(bounds: any, margin?: any): void

    getBounds(): Bounds

    getCenter(): Coord

    getCenterPoint(): Coord

    getElement(): HTMLElement

    getMapTypeId(): string

    getOptions(key?: string): any

    getPanes(): MapPanes

    getPrimitiveProjection(): Projection

    getProjection(): MapSystemProjection

    getSize(): Size

    getZoom(): number

    morph(
      coord: Coord | CoordLiteral,
      zoom?: number,
      transitionOptions?: TransitionOptions,
    ): void

    panBy(offset: Point | PointLiteral): void

    panTo(
      coord: Coord | CoordLiteral,
      transitionOptions: TransitionOptions,
    ): void

    panToBounds(
      bounds: Bounds | BoundsLiteral,
      transitionOptions: TransitionOptions,
      margin?: Margin,
    ): void

    refresh(noEffect?: boolean): void

    removePane(name: string): void

    setCenter(center: Coord | CoordLiteral): void

    setCenterPoint(point: Point | PointLiteral): void

    setMapTypeId(mapTypeId: string): void

    setOptions(newOptionsOrKey: any, value?: any): void

    setSize(size: Size | SizeLiteral): void

    setZoom(zoom: number, effect?: boolean): void

    updateBy(coord: Coord | CoordLiteral, zoom: number): void

    zoomBy(
      deltaZoom: number,
      zoomOrigin?: Coord | CoordLiteral,
      effect?: boolean,
    ): void
  }
  class OverlayView extends KVO {
    draw(): void

    getContainerTopLeft(): Point

    getMap(): Map | null

    getPanes(): MapPanes

    getProjection(): MapSystemProjection

    onAdd(): any

    onRemove(): any

    setMap(map: Map | null): void
  }

  class Marker extends OverlayView {
    constructor(options: MarkerOptions)

    draw(): void

    getAnimation(): Animation

    getClickable(): boolean

    getCursor(): string

    getDraggable(): boolean

    getDrawingRect(): Bounds

    getIcon(): ImageIcon | SymbolIcon | HtmlIcon

    getOptions(key?: string): MarkerOptions

    getPosition(): Coord

    getShape(): MarkerShape

    getTitle(): string

    getVisible(): boolean

    getZIndex(): number

    onAdd(): void

    onRemove(): void

    setAnimation(animation: Animation): void

    setClickable(clickable: boolean): void

    setCursor(cursor: string): void

    setDraggable(draggable: boolean): void

    setIcon(icon: string | ImageIcon | SymbolIcon | HtmlIcon): void

    setOptions(options: MarkerOptions): void

    setPosition(position: Coord | CoordLiteral): void

    setShape(shape: MarkerShape): void

    setTitle(title: string): void

    setVisible(visible: boolean): void

    setZIndex(zIndex: number): void
  }
}

const mapStyle = {
  width: '100%',
  height: '250px',
}

function Map({ location }: { location: Beige['location'] }) {
  const { lat, lng, pathLink } = location

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NCP_CLIENT_ID}`
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(lat, lng),
        zoom: 15,
        maxZoom: 15,
        minZoom: 15,
        draggable: false,
      }
      const map = new naver.maps.Map('map', mapOptions)

      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: map,
      })
    }
  }, [lat, lng])

  return (
    <div className={cx('article')}>
      <div id="map" style={mapStyle}></div>
      <LinkButton label="지도로 보기" to={pathLink} open />
    </div>
  )
}

export default Map
