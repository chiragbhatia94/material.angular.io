import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SceneViewer} from './scene-viewer/scene-viewer';
import {RipplesScene} from './scenes/ripples/ripples-scene';
import {InputScene} from './scenes/input/input-scene';
import {ButtonToggleScene} from './scenes/button-toggle/button-toggle-scene';
import {SliderScene} from './scenes/slider/slider-scene';
import {SlideToggleScene} from './scenes/slide-toggle/slide-toggle-scene';
import {DividerScene} from './scenes/divider/divider-scene';
import {PlaceHolderScene} from './scenes/placeholder/placeholder-scene';
import {ComponentType} from '@angular/cdk/overlay';

let hue = 0;

type SceneViewerRoute = {
  path: string,
  component: ComponentType<SceneViewer>,
  data: {
    scene: ComponentType<unknown>,
    scale?: number,
    hueRotate?: number
  }
};

const routes: SceneViewerRoute[] = [
  {path: 'autocomplete', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'badge', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'bottom-sheet', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'button', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'button-toggle', component: SceneViewer, data: {scale: 1.5, scene: ButtonToggleScene}},
  {path: 'card', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'checkbox', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'chips', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'datepicker', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'dialog', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'divider', component: SceneViewer, data: {scene: DividerScene}},
  {path: 'expansion', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'form-field', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'grid-list', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'icon', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'input', component: SceneViewer, data: {scale: 0.7, scene: InputScene}},
  {path: 'list', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'menu', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'paginator', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'progress-bar', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'progress-spinner', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'radio', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'ripple', component: SceneViewer, data: {scene: RipplesScene}},
  {path: 'select', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'sidenav', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'sidenav', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'slide-toggle', component: SceneViewer, data: {scene: SlideToggleScene}},
  {path: 'slider', component: SceneViewer, data: {scene: SliderScene}},
  {path: 'snack-bar', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'sort', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'stepper', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'table', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'tabs', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'toolbar', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'tooltip', component: SceneViewer, data: {scene: PlaceHolderScene}},
  {path: 'tree', component: SceneViewer, data: {scene: PlaceHolderScene}},
].sort((a, b) => (a.path > b.path) ? 1 : ((b.path > a.path) ? -1 : 0))
  .map((route: SceneViewerRoute) => ({...route, data: {...route.data, hueRotate: 15 * hue++}}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
