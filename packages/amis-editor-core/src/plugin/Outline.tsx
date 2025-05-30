import React from 'react';
import {Icon} from 'amis';
import {registerEditorPlugin} from '../manager';
import {BuildPanelEventContext, BasePlugin, BasicPanelItem} from '../plugin';
import WidthDraggableContainer from '../component/base/WidthDraggableContainer';
import {OutlinePanel} from '../component/Panel/Outline';

/**
 * 大纲面板
 */
export class OutlinePlugin extends BasePlugin {
  static scene = ['layout'];
  order = -9999;

  buildEditorPanel(
    context: BuildPanelEventContext,
    panels: Array<BasicPanelItem>
  ) {
    const store = this.manager.store;

    // 多选时显示大纲面板
    if (store && context.selections.length) {
      const {changeLeftPanelOpenStatus, changeLeftPanelKey} = store;
      changeLeftPanelOpenStatus(true);
      changeLeftPanelKey('outline');
    }
    panels.push({
      key: 'outline',
      icon: <Icon icon="editor-outline" />, // 'fa fa-navicon',
      tooltip: '大纲',
      component: WidthDraggableContainer(OutlinePanel),
      position: 'left',
      order: 4000
    });
  }
}

registerEditorPlugin(OutlinePlugin);
