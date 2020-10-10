import React__default, {
  useContext,
  useState,
  forwardRef,
  createRef,
  createElement,
  Component,
} from 'react';
import G6 from '@antv/g6/lib';
import { mix, isString, clone, each, wrapBehavior, deepMix } from '@antv/util';
import { modifyCSS, createDom } from '@antv/dom-util';
import { Input, Checkbox, Select, DatePicker, Modal, Button, Collapse, Tooltip } from 'antd';
import moment from 'moment';
import EditableTable from 'antd-etable';
import 'antd/lib/input/style';
import 'antd/lib/select/style';
import 'antd/lib/switch/style';
import 'antd/lib/collapse/style';
import 'antd/lib/tooltip/style';
import { shapeBase } from '@antv/g6/lib/shape/shapeBase';
import Shape from '@antv/g6/lib/shape/shape';
import Item from '@antv/g6/lib/item/item';
import { Marker } from '@antv/g-canvas/lib/shape';
import { vec2 } from '@antv/matrix-util';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css =
  '.index_root__NkeuW {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  display: block;\n}\n.index_canvasPanel__1QWM8 {\n  flex: 0 0 auto;\n  float: left;\n  width: 70%;\n  background-color: #fff;\n  border-bottom: 1px solid #E9E9E9;\n}\n.index_contextmenu__309Aq {\n  display: none;\n  width: 200px;\n  margin: 0;\n  color: #000;\n  font-size: 12px;\n  background: white;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n}\n.index_contextmenu__309Aq .index_disable__1mlPN {\n  color: rgba(0, 0, 0, 0.25);\n}\n.index_contextmenu__309Aq .index_command__16-c6 {\n  box-sizing: content-box;\n  height: 12px;\n  padding: 8px;\n}\n.index_contextmenu__309Aq .index_command__16-c6:hover {\n  background: #E6F7FF;\n  cursor: pointer;\n}\n.index_contextmenu__309Aq .index_command__16-c6.index_disable__1mlPN:hover {\n  background: none;\n  cursor: default;\n}\n.index_contextmenu__309Aq span:nth-of-type(1) {\n  float: left;\n}\n.index_contextmenu__309Aq span:nth-of-type(2) {\n  float: right;\n}\n';
var styles = {
  root: 'index_root__NkeuW',
  canvasPanel: 'index_canvasPanel__1QWM8',
  contextmenu: 'index_contextmenu__309Aq',
  disable: 'index_disable__1mlPN',
  command: 'index_command__16-c6',
};
styleInject(css);

function getShapeName(clazz) {
  switch (clazz) {
    case 'start':
      return 'start-node';

    case 'end':
      return 'end-node';

    case 'gateway':
      return 'gateway-node';

    case 'exclusiveGateway':
      return 'exclusive-gateway-node';

    case 'parallelGateway':
      return 'parallel-gateway-node';

    case 'inclusiveGateway':
      return 'inclusive-gateway-node';

    case 'timerStart':
      return 'timer-start-node';

    case 'messageStart':
      return 'message-start-node';

    case 'signalStart':
      return 'signal-start-node';

    case 'userTask':
      return 'user-task-node';

    case 'scriptTask':
      return 'script-task-node';

    case 'mailTask':
      return 'mail-task-node';

    case 'javaTask':
      return 'java-task-node';

    case 'receiveTask':
      return 'receive-task-node';

    case 'timerCatch':
      return 'timer-catch-node';

    case 'messageCatch':
      return 'message-catch-node';

    case 'signalCatch':
      return 'signal-catch-node';

    case 'subProcess':
      return 'sub-process-node';

    default:
      return 'task-node';
  }
}

var en = {
  label: 'Label',
  hideIcon: 'Hide Icon',
  subProcess: 'Sub Process',
  userTask: 'User Task',
  'userTask.assignType': 'Assign Type',
  'userTask.assignType.placeholder': 'Select a assign type',
  'userTask.assignType.person': 'Person',
  'userTask.assignType.person.title': 'Assign Person',
  'userTask.assignType.person.placeholder': 'Select assign person',
  'userTask.assignType.persongroup': 'Person Group',
  'userTask.assignType.persongroup.title': 'Assign Person Group',
  'userTask.assignType.persongroup.placeholder': 'Select assign person group',
  'userTask.assignType.custom': 'Custom Java Class',
  'userTask.assignType.custom.title': 'Java Class Name',
  'userTask.dueDate': 'Due Date',
  'userTask.dueDate.placeholder': 'Select date',
  'userTask.counterSign': 'CounterSign',
  scriptTask: 'Script Task',
  'scriptTask.script': 'Script',
  javaTask: 'Java Task',
  'javaTask.javaClass': 'Java Class Name',
  mailTask: 'Mail Task',
  'mailTask.to': 'To',
  'mailTask.subject': 'Subject',
  'mailTask.content': 'Content',
  receiveTask: 'Receive Task',
  'receiveTask.waitState': 'Wait State',
  'receiveTask.stateValue': 'State Value',
  timerEvent: 'Timer Event',
  'timerEvent.cycle': 'Cycle',
  'timerEvent.cycle.placeholder': 'Select time',
  'timerEvent.duration': 'Duration',
  messageEvent: 'Message Event',
  'messageEvent.message': 'Message',
  signalEvent: 'Signal Event',
  'signalEvent.signal': 'Signal',
  sequenceFlow: 'Sequence Flow',
  'sequenceFlow.expression': 'Expression',
  'sequenceFlow.seq': 'Sequence',
  'sequenceFlow.reverse': 'Reverse',
  startEvent: 'Start Event',
  endEvent: 'End Event',
  start: 'Start Events',
  end: 'End Events',
  gateway: 'Gateway',
  exclusiveGateway: 'Exclusive Gateway',
  parallelGateway: 'Parallel Gateway',
  inclusiveGateway: 'Inclusive Gateway',
  task: 'Task',
  catch: 'Catching Event',
  'tooltip.undo': 'Undo',
  'tooltip.redo': 'Redo',
  'tooltip.copy': 'Copy',
  'tooltip.paste': 'Paste',
  'tooltip.delete': 'Delete',
  'tooltip.zoomIn': 'Zoom In',
  'tooltip.zoomOut': 'Zoom Out',
  'tooltip.zoomReset': 'Zoom Reset',
  'tooltip.autoFit': 'Auto Fit',
  'tooltip.toFront': 'To Front Layer',
  'tooltip.toBack': 'To Back Layer',
  'tooltip.edit': 'Edit',
  process: 'Workflow',
  'process.id': 'Workflow ID',
  'process.name': 'Workflow Name',
  'process.dataObjs': 'Data Objects',
  'process.signalDefs': 'Signal Defs',
  'process.messageDefs': 'Message Defs',
  'process.dataObjs.id': 'Id',
  'process.dataObjs.name': 'Name',
  'process.dataObjs.type': 'Type',
  'process.dataObjs.defaultValue': 'DefaultValue',
  'process.signalDef.scope': 'Scope',
};

var zh = {
  label: '标题',
  hideIcon: '隐藏图标',
  subProcess: '子流程',
  userTask: '审批节点',
  'userTask.assignType': '指派类型',
  'userTask.assignType.placeholder': '选择一个类型',
  'userTask.assignType.person': '人员',
  'userTask.assignType.person.title': '审批人',
  'userTask.assignType.person.placeholder': '选择审批人',
  'userTask.assignType.persongroup': '人员组',
  'userTask.assignType.persongroup.title': '审批组',
  'userTask.assignType.persongroup.placeholder': '选择审批组',
  'userTask.assignType.custom': '自定义类',
  'userTask.assignType.custom.title': '类名',
  'userTask.dueDate': '到期时间',
  'userTask.dueDate.placeholder': '请选择日期',
  'userTask.counterSign': '会签',
  scriptTask: '脚本节点',
  'scriptTask.script': '脚本',
  javaTask: '自定义类节点',
  'javaTask.javaClass': '类名',
  mailTask: '邮件节点',
  'mailTask.to': '收件人',
  'mailTask.subject': '标题',
  'mailTask.content': '内容',
  receiveTask: '接收节点',
  'receiveTask.waitState': '等待属性',
  'receiveTask.stateValue': '等待值',
  timerEvent: '定时节点',
  'timerEvent.cycle': '循环时间',
  'timerEvent.cycle.placeholder': '请选择时间',
  'timerEvent.duration': '持续时间',
  messageEvent: '消息节点',
  'messageEvent.message': '消息名',
  signalEvent: '信号节点',
  'signalEvent.signal': '信号名',
  sequenceFlow: '连接线',
  'sequenceFlow.expression': '条件表达式',
  'sequenceFlow.seq': '序号',
  'sequenceFlow.reverse': '反向',
  startEvent: '开始节点',
  endEvent: '结束节点',
  start: '开始事件',
  end: '结束事件',
  gateway: '网关',
  exclusiveGateway: '排他网关',
  parallelGateway: '并行网关',
  inclusiveGateway: '包容网关',
  task: '活动',
  catch: '捕获事件',
  'tooltip.undo': '撤销',
  'tooltip.redo': '重复',
  'tooltip.copy': '复制',
  'tooltip.paste': '粘贴',
  'tooltip.delete': '删除',
  'tooltip.zoomIn': '缩小',
  'tooltip.zoomOut': '放大',
  'tooltip.zoomReset': '实际大小',
  'tooltip.autoFit': '适应屏幕',
  'tooltip.toFront': '移到上一层',
  'tooltip.toBack': '移到下一层',
  'tooltip.edit': '编辑',
  process: '流程',
  'process.id': '流程标识',
  'process.name': '流程名称',
  'process.dataObjs': '数据对象',
  'process.signalDefs': '信号定义',
  'process.messageDefs': '消息定义',
  'process.dataObjs.id': 'Id',
  'process.dataObjs.name': '名称',
  'process.dataObjs.type': '类型',
  'process.dataObjs.defaultValue': '默认值',
  'process.signalDef.scope': '作用域',
};

var locale = {
  en: en,
  zh: zh,
};

var Command = /*#__PURE__*/ (function() {
  function Command() {
    _classCallCheck(this, Command);

    this._cfgs = this.getDefaultCfg();
    this.list = [];
    this.queue = [];
  }

  _createClass(Command, [
    {
      key: 'getDefaultCfg',
      value: function getDefaultCfg() {
        return {
          _command: {
            zoomDelta: 0.1,
            queue: [],
            current: 0,
            clipboard: [],
          },
        };
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this._cfgs[key];
      },
    },
    {
      key: 'set',
      value: function set(key, val) {
        this._cfgs[key] = val;
      },
    },
    {
      key: 'initPlugin',
      value: function initPlugin(graph) {
        var _this = this;

        this.initCommands();

        graph.getCommands = function() {
          return _this.get('_command').queue;
        };

        graph.getCurrentCommand = function() {
          var c = _this.get('_command');

          return c.queue[c.current - 1];
        };

        graph.executeCommand = function(name, cfg) {
          _this.execute(name, graph, cfg);
        };

        graph.commandEnable = function(name) {
          return _this.enable(name, graph);
        };
      },
    },
    {
      key: 'registerCommand',
      value: function registerCommand(name, cfg) {
        if (this[name]) {
          mix(this[name], cfg);
        } else {
          var cmd = mix(
            {},
            {
              name: name,
              shortcutCodes: [],
              queue: true,
              executeTimes: 1,
              init: function init() {},
              enable: function enable() {
                return true;
              },
              execute: function execute(graph) {
                this.snapShot = graph.save();
                this.selectedItems = graph.get('selectedItems');
                this.method && (isString(this.method) ? graph[this.method]() : this.method(graph));
              },
              back: function back(graph) {
                graph.read(this.snapShot);
                graph.set('selectedItems', this.selectedItems);
              },
            },
            cfg,
          );
          this[name] = cmd;
          this.list.push(cmd);
        }
      },
    },
    {
      key: 'execute',
      value: function execute(name, graph, cfg) {
        var cmd = mix({}, this[name], cfg);
        var manager = this.get('_command');

        if (cmd.enable(graph)) {
          cmd.init();

          if (cmd.queue) {
            manager.queue.splice(manager.current, manager.queue.length - manager.current, cmd);
            manager.current++;
          }
        }

        graph.emit('beforecommandexecute', {
          command: cmd,
        });
        cmd.execute(graph);
        graph.emit('aftercommandexecute', {
          command: cmd,
        });
        return cmd;
      },
    },
    {
      key: 'enable',
      value: function enable(name, graph) {
        return this[name].enable(graph);
      },
    },
    {
      key: 'destroyPlugin',
      value: function destroyPlugin() {
        this._events = null;
        this._cfgs = null;
        this.list = [];
        this.queue = [];
        this.destroyed = true;
      },
    },
    {
      key: '_deleteSubProcessNode',
      value: function _deleteSubProcessNode(graph, itemId) {
        var subProcess = graph.find('node', function(node) {
          if (node.get('model')) {
            var clazz = node.get('model').clazz;

            if (clazz === 'subProcess') {
              var containerGroup = node.getContainer();
              var subGroup = containerGroup.subGroup;
              var item = subGroup.findById(itemId);
              return subGroup.contain(item);
            } else {
              return false;
            }
          } else {
            return false;
          }
        });

        if (subProcess) {
          var group = subProcess.getContainer();
          var resultModel = group.removeItem(subProcess, itemId);
          graph.updateItem(subProcess, resultModel);
        }
      },
    },
    {
      key: 'initCommands',
      value: function initCommands() {
        var cmdPlugin = this;
        cmdPlugin.registerCommand('add', {
          enable: function enable() {
            return this.type && this.addModel;
          },
          execute: function execute(graph) {
            var item = graph.add(this.type, this.addModel);
            if (this.executeTimes === 1) this.addId = item.get('id');
          },
          back: function back(graph) {
            graph.remove(this.addId);
          },
        });
        cmdPlugin.registerCommand('update', {
          enable: function enable() {
            return this.itemId && this.updateModel;
          },
          execute: function execute(graph) {
            var item = graph.findById(this.itemId);

            if (item) {
              if (this.executeTimes === 1) this.originModel = mix({}, item.getModel());
              graph.update(item, this.updateModel);
            }
          },
          back: function back(graph) {
            var item = graph.findById(this.itemId);
            graph.update(item, this.originModel);
          },
        });
        cmdPlugin.registerCommand('delete', {
          enable: function enable(graph) {
            var mode = graph.getCurrentMode();
            var selectedItems = graph.get('selectedItems');
            return mode === 'edit' && selectedItems && selectedItems.length > 0;
          },
          method: function method(graph) {
            var selectedItems = graph.get('selectedItems');
            graph.emit('beforedelete', {
              items: selectedItems,
            });

            if (selectedItems && selectedItems.length > 0) {
              selectedItems.forEach(function(i) {
                var node = graph.findById(i);

                if (node) {
                  graph.remove(i);
                } else {
                  cmdPlugin._deleteSubProcessNode(graph, i);
                }
              });
            }

            graph.emit('afterdelete', {
              items: selectedItems,
            });
          },
          shortcutCodes: ['Delete', 'Backspace'],
        });
        cmdPlugin.registerCommand('redo', {
          queue: false,
          enable: function enable(graph) {
            var mode = graph.getCurrentMode();
            var manager = cmdPlugin.get('_command');
            return mode === 'edit' && manager.current < manager.queue.length;
          },
          execute: function execute(graph) {
            var manager = cmdPlugin.get('_command');
            var cmd = manager.queue[manager.current];
            cmd && cmd.execute(graph);
            manager.current++;
          },
          shortcutCodes: [
            ['metaKey', 'shiftKey', 'z'],
            ['ctrlKey', 'shiftKey', 'z'],
          ],
        });
        cmdPlugin.registerCommand('undo', {
          queue: false,
          enable: function enable(graph) {
            var mode = graph.getCurrentMode();
            return mode === 'edit' && cmdPlugin.get('_command').current > 0;
          },
          execute: function execute(graph) {
            var manager = cmdPlugin.get('_command');
            var cmd = manager.queue[manager.current - 1];

            if (cmd) {
              cmd.executeTimes++;
              cmd.back(graph);
            }

            manager.current--;
          },
          shortcutCodes: [
            ['metaKey', 'z'],
            ['ctrlKey', 'z'],
          ],
        });
        cmdPlugin.registerCommand('copy', {
          queue: false,
          enable: function enable(graph) {
            var mode = graph.getCurrentMode();
            var items = graph.get('selectedItems');
            return mode === 'edit' && items && items.length > 0;
          },
          method: function method(graph) {
            var manager = cmdPlugin.get('_command');
            manager.clipboard = [];
            var items = graph.get('selectedItems');

            if (items && items.length > 0) {
              var item = graph.findById(items[0]);

              if (item) {
                manager.clipboard.push({
                  type: item.get('type'),
                  model: item.getModel(),
                });
              }
            }
          },
        });
        cmdPlugin.registerCommand('paste', {
          enable: function enable(graph) {
            var mode = graph.getCurrentMode();
            return mode === 'edit' && cmdPlugin.get('_command').clipboard.length > 0;
          },
          method: function method(graph) {
            var manager = cmdPlugin.get('_command');
            this.pasteData = clone(manager.clipboard[0]);
            var addModel = this.pasteData.model;
            addModel.x && (addModel.x += 10);
            addModel.y && (addModel.y += 10);
            var _addModel$clazz = addModel.clazz,
              clazz = _addModel$clazz === void 0 ? 'userTask' : _addModel$clazz;
            var timestamp = new Date().getTime();
            var id = clazz + timestamp;
            addModel.id = id;
            var item = graph.add(this.pasteData.type, addModel);
            item.toFront();
          },
        });
        cmdPlugin.registerCommand('zoomIn', {
          queue: false,
          enable: function enable(graph) {
            var zoom = graph.getZoom();
            var maxZoom = graph.get('maxZoom');
            var minZoom = graph.get('minZoom');
            return zoom <= maxZoom && zoom >= minZoom;
          },
          execute: function execute(graph) {
            var manager = cmdPlugin.get('_command');
            var maxZoom = graph.get('maxZoom');
            var zoom = graph.getZoom();
            this.originZoom = zoom;
            var currentZoom = zoom + manager.zoomDelta;
            if (currentZoom > maxZoom) currentZoom = maxZoom;
            graph.zoomTo(currentZoom);
          },
          back: function back(graph) {
            graph.zoomTo(this.originZoom);
          },
          shortcutCodes: [
            ['metaKey', '='],
            ['ctrlKey', '='],
          ],
        });
        cmdPlugin.registerCommand('zoomOut', {
          queue: false,
          enable: function enable(graph) {
            var zoom = graph.getZoom();
            var maxZoom = graph.get('maxZoom');
            var minZoom = graph.get('minZoom');
            return zoom <= maxZoom && zoom >= minZoom;
          },
          execute: function execute(graph) {
            var manager = cmdPlugin.get('_command');
            var minZoom = graph.get('minZoom');
            var zoom = graph.getZoom();
            this.originZoom = zoom;
            var currentZoom = zoom - manager.zoomDelta;
            if (currentZoom < minZoom) currentZoom = minZoom;
            graph.zoomTo(currentZoom);
          },
          back: function back(graph) {
            graph.zoomTo(this.originZoom);
          },
          shortcutCodes: [
            ['metaKey', '-'],
            ['ctrlKey', '-'],
          ],
        });
        cmdPlugin.registerCommand('resetZoom', {
          queue: false,
          execute: function execute(graph) {
            var zoom = graph.getZoom();
            this.originZoom = zoom;
            graph.zoomTo(1);
          },
          back: function back(graph) {
            graph.zoomTo(this.originZoom);
          },
        });
        cmdPlugin.registerCommand('autoFit', {
          queue: false,
          execute: function execute(graph) {
            var zoom = graph.getZoom();
            this.originZoom = zoom;
            graph.fitView(5);
          },
          back: function back(graph) {
            graph.zoomTo(this.originZoom);
          },
        });
        cmdPlugin.registerCommand('toFront', {
          queue: false,
          enable: function enable(graph) {
            var items = graph.get('selectedItems');
            return items && items.length > 0;
          },
          execute: function execute(graph) {
            var items = graph.get('selectedItems');

            if (items && items.length > 0) {
              var item = graph.findById(items[0]);
              item.toFront();
              graph.paint();
            }
          },
          back: function back(graph) {},
        });
        cmdPlugin.registerCommand('toBack', {
          queue: false,
          enable: function enable(graph) {
            var items = graph.get('selectedItems');
            return items && items.length > 0;
          },
          execute: function execute(graph) {
            var items = graph.get('selectedItems');

            if (items && items.length > 0) {
              var item = graph.findById(items[0]);
              item.toBack();
              graph.paint();
            }
          },
          back: function back(graph) {},
        });
      },
    },
  ]);

  return Command;
})();

var Toolbar = /*#__PURE__*/ (function() {
  function Toolbar(cfgs) {
    _classCallCheck(this, Toolbar);

    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
  }

  _createClass(Toolbar, [
    {
      key: 'getDefaultCfg',
      value: function getDefaultCfg() {
        return {
          container: null,
        };
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this._cfgs[key];
      },
    },
    {
      key: 'set',
      value: function set(key, val) {
        this._cfgs[key] = val;
      },
    },
    {
      key: 'initPlugin',
      value: function initPlugin(graph) {
        var self = this;
        this.set('graph', graph);
        var events = self.getEvents();
        var bindEvents = {};
        each(events, function(v, k) {
          var event = wrapBehavior(self, v);
          bindEvents[k] = event;
          graph.on(k, event);
        });
        this._events = bindEvents;
        this.initEvents();
        this.updateToolbar();
      },
    },
    {
      key: 'getEvents',
      value: function getEvents() {
        return {
          afteritemselected: 'updateToolbar',
          aftercommandexecute: 'updateToolbar',
        };
      },
    },
    {
      key: 'initEvents',
      value: function initEvents() {
        var graph = this.get('graph');
        var parentNode = this.get('container');
        var children = parentNode.querySelectorAll('div > span[data-command]');
        each(children, function(child, i) {
          var cmdName = child.getAttribute('data-command');
          child.addEventListener('click', function(e) {
            graph.commandEnable(cmdName) && graph.executeCommand(cmdName);
          });
        });
      },
    },
    {
      key: 'updateToolbar',
      value: function updateToolbar() {
        var graph = this.get('graph');
        var parentNode = this.get('container');
        var children = parentNode.querySelectorAll('div > span[data-command]');
        each(children, function(child, i) {
          var cmdName = child.getAttribute('data-command');

          if (graph.commandEnable(cmdName)) {
            modifyCSS(child, {
              cursor: 'pointer',
            });
            modifyCSS(child.children[0], {
              color: '#666',
            });
            child.children[0].setAttribute('color', '#666');
          } else {
            modifyCSS(child, {
              cursor: 'default',
            });
            modifyCSS(child.children[0], {
              color: '#bfbfbf',
            });
            child.children[0].setAttribute('color', '#bfbfbf');
          }
        });
      },
    },
    {
      key: 'destroyPlugin',
      value: function destroyPlugin() {
        this.get('canvas').destroy();
        var container = this.get('container');
        container.parentNode.removeChild(container);
      },
    },
  ]);

  return Toolbar;
})();

var AddItemPanel = /*#__PURE__*/ (function() {
  function AddItemPanel(cfgs) {
    _classCallCheck(this, AddItemPanel);

    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
  }

  _createClass(AddItemPanel, [
    {
      key: 'getDefaultCfg',
      value: function getDefaultCfg() {
        return {
          container: null,
        };
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this._cfgs[key];
      },
    },
    {
      key: 'set',
      value: function set(key, val) {
        this._cfgs[key] = val;
      },
    },
    {
      key: 'initPlugin',
      value: function initPlugin(graph) {
        var parentNode = this.get('container');
        var ghost = createDom(
          '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"' +
            ' style="opacity:0"/>',
        );
        var children = parentNode.querySelectorAll(
          'div > div > .ant-collapse-content > div > img[data-item]',
        );
        each(children, function(child, i) {
          var addModel = new Function('return ' + child.getAttribute('data-item'))();
          child.addEventListener('dragstart', function(e) {
            e.dataTransfer.setDragImage(ghost, 0, 0);
            graph.set('addNodeDragging', true);
            graph.set('addModel', addModel);
          });
          child.addEventListener('dragend', function(e) {
            graph.emit('canvas:mouseup', e);
            graph.set('addNodeDragging', false);
            graph.set('addModel', null);
          });
        });
      },
    },
    {
      key: 'destroy',
      value: function destroy() {
        this.get('canvas').destroy();
        var container = this.get('container');
        container.parentNode.removeChild(container);
      },
    },
  ]);

  return AddItemPanel;
})();

var CanvasPanel = /*#__PURE__*/ (function() {
  function CanvasPanel(cfgs) {
    _classCallCheck(this, CanvasPanel);

    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
  }

  _createClass(CanvasPanel, [
    {
      key: 'getDefaultCfg',
      value: function getDefaultCfg() {
        return {
          container: null,
        };
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this._cfgs[key];
      },
    },
    {
      key: 'set',
      value: function set(key, val) {
        this._cfgs[key] = val;
      },
    },
    {
      key: 'initPlugin',
      value: function initPlugin(graph) {
        var parentNode = this.get('container');
        parentNode.addEventListener('dragover', function(e) {
          graph.emit('canvas:mousemove', e);
        });
        parentNode.addEventListener('dragleave', function(e) {
          graph.emit('canvas:mouseleave', e);
        });
      },
    },
    {
      key: 'destroy',
      value: function destroy() {
        this.get('canvas').destroy();
        var container = this.get('container');
        container.parentNode.removeChild(container);
      },
    },
  ]);

  return CanvasPanel;
})();

function tab(len) {
  return _toConsumableArray(Array(len))
    .map(function(a) {
      return ' ';
    })
    .join('');
}

function exportXML(json, canvas) {
  var createFile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var id = canvas.id || 'flow';
  var name = canvas.name || 'flow';
  var dataObjs = '';
  canvas.dataObjs.forEach(function(s) {
    dataObjs += ''
      .concat(tab(4), '<dataObject id="')
      .concat(s.id, '" name="')
      .concat(s.name, '" itemSubjectRef="xsd:')
      .concat(s.type, '"></dataObject>\n');
  });
  var signals = '';
  canvas.signalDefs.forEach(function(s) {
    signals += ''
      .concat(tab(2), '<signal id="')
      .concat(s.id, '" name="')
      .concat(s.name, '" flowable:scope="')
      .concat(s.scope, '"></signal>\n');
  });
  var messages = '';
  canvas.messageDefs.forEach(function(s) {
    messages += ''
      .concat(tab(2), '<message id="')
      .concat(s.id, '" name="')
      .concat(s.name, '"></message>\n');
  });
  var BPMNShape = '';
  var BPMNEdge = '';
  var processXML = ''
    .concat(tab(2), '<process id="')
    .concat(id, '" name="')
    .concat(name, '">\n');
  processXML += dataObjs;
  json.nodes.forEach(function(node) {
    BPMNShape +=
      ''
        .concat(tab(6), '<bpmndi:BPMNShape bpmnElement="')
        .concat(node.id, '" id="BPMNShape_')
        .concat(node.id, '">\n') +
      ''
        .concat(tab(8), '<omgdc:Bounds width="')
        .concat(node.size[0], '" height="')
        .concat(node.size[1], '" x="')
        .concat(node.x, '" y="')
        .concat(node.y, '"></omgdc:Bounds>\n') +
      ''.concat(tab(6), '</bpmndi:BPMNShape>\n');

    switch (node.clazz) {
      case 'start':
        processXML += ''.concat(tab(4), '<startEvent id="').concat(node.id, '"></startEvent>\n');
        break;

      case 'end':
        processXML += ''.concat(tab(4), '<endEvent id="').concat(node.id, '"></endEvent>\n');
        break;

      case 'userTask': {
        var assignments = '';

        if (node.assignValue && node.assignValue.length > 0) {
          if (node.assignType === 'person') {
            assignments += 'flowable:candidateUsers="'.concat(node.assignValue.join(','), '"');
          } else if (node.assignType === 'persongroup') {
            assignments += 'flowable:candidateGroups="'.concat(node.assignValue.join(','), '"');
          }
        }

        processXML += ''
          .concat(tab(4), '<userTask id="')
          .concat(node.id, '" name="')
          .concat(node.label, '" ')
          .concat(assignments, '></userTask>\n');
        break;
      }

      case 'javaTask': {
        var javaClass = '';

        if (node.javaClass) {
          javaClass = 'flowable:class="'.concat(node.javaClass, '"');
        }

        processXML += ''
          .concat(tab(4), '<serviceTask id="')
          .concat(node.id, '" name="')
          .concat(node.label, '" ')
          .concat(javaClass, '></serviceTask>\n');
        break;
      }

      case 'scriptTask': {
        var script = '';

        if (node.script) {
          script = ''.concat(tab(6), '<script><![CDATA[').concat(node.script, ']]></script>\n');
        }

        processXML += ''
          .concat(tab(4), '<scriptTask id="')
          .concat(node.id, '" name="')
          .concat(node.label, '">\n')
          .concat(script)
          .concat(tab(4), '</scriptTask>\n');
        break;
      }

      case 'receiveTask':
        processXML += ''
          .concat(tab(4), '<receiveTask id="')
          .concat(node.id, '" name="')
          .concat(node.label, '"></receiveTask>\n');
        break;

      case 'mailTask': {
        var to = ''.concat(tab(8), '<flowable:field name="to">\n');
        to += ''
          .concat(tab(10), '<flowable:string><![CDATA[')
          .concat(node.to, ']]></flowable:string>\n');
        to += ''.concat(tab(8), '</flowable:field>\n');
        var subject = ''.concat(tab(8), '<flowable:field name="subject">\n');
        subject += ''
          .concat(tab(10), '<flowable:string><![CDATA[')
          .concat(node.subject, ']]></flowable:string>\n');
        subject += ''.concat(tab(8), '</flowable:field>\n');
        var text = ''.concat(tab(8), '<flowable:field name="text">\n');
        text += ''
          .concat(tab(10), '<flowable:string><![CDATA[')
          .concat(node.content, ']]></flowable:string>\n');
        text += ''.concat(tab(8), '</flowable:field>\n');
        var extension = ''
          .concat(tab(6), '<extensionElements>\n')
          .concat(to)
          .concat(subject)
          .concat(text)
          .concat(tab(6), '</extensionElements>\n');
        processXML += ''
          .concat(tab(4), '<serviceTask id="')
          .concat(node.id, '" name="')
          .concat(node.label, '" flowable:type="mail">\n')
          .concat(extension)
          .concat(tab(4), '</serviceTask>\n');
        break;
      }

      case 'timerStart': {
        var timer = ''
          .concat(tab(6), '<timerEventDefinition>\n')
          .concat(tab(8), '<timeCycle>')
          .concat(node.cycle, '</timeCycle>\n')
          .concat(tab(6), '</timerEventDefinition>\n');
        processXML += ''
          .concat(tab(4), '<startEvent id="')
          .concat(node.id, '" isInterrupting="false">\n')
          .concat(timer)
          .concat(tab(4), '</startEvent>\n');
        break;
      }

      case 'timerCatch': {
        var _timer = ''
          .concat(tab(6), '<timerEventDefinition>\n')
          .concat(tab(8), '<timeCycle>')
          .concat(node.cycle, '</timeCycle>\n')
          .concat(tab(6), '</timerEventDefinition>\n');

        processXML += ''
          .concat(tab(4), '<intermediateCatchEvent id="')
          .concat(node.id, '">\n')
          .concat(_timer)
          .concat(tab(4), '</intermediateCatchEvent>\n');
        break;
      }

      case 'signalStart': {
        var signal = ''
          .concat(tab(6), '<signalEventDefinition signalRef="')
          .concat(node.signal, '"></signalEventDefinition>\n');
        processXML += ''
          .concat(tab(4), '<startEvent id="')
          .concat(node.id, '" isInterrupting="true">\n')
          .concat(signal)
          .concat(tab(4), '</startEvent>\n');
        break;
      }

      case 'signalCatch': {
        var _signal = ''
          .concat(tab(6), '<signalEventDefinition signalRef="')
          .concat(node.signal, '"></signalEventDefinition>\n');

        processXML += ''
          .concat(tab(4), '<intermediateCatchEvent id="')
          .concat(node.id, '">\n')
          .concat(_signal)
          .concat(tab(4), '</intermediateCatchEvent>\n');
        break;
      }

      case 'messageStart': {
        var message = ''
          .concat(tab(6), '<messageEventDefinition messageRef="')
          .concat(node.message, '"></messageEventDefinition>\n');
        processXML += ''
          .concat(tab(4), '<startEvent id="')
          .concat(node.id, '" isInterrupting="true">\n')
          .concat(message)
          .concat(tab(4), '</startEvent>\n');
        break;
      }

      case 'messageCatch': {
        var _message = ''
          .concat(tab(6), '<messageEventDefinition messageRef="')
          .concat(node.message, '"></messageEventDefinition>\n');

        processXML += ''
          .concat(tab(4), '<intermediateCatchEvent id="')
          .concat(node.id, '">\n')
          .concat(_message)
          .concat(tab(4), '</intermediateCatchEvent>\n');
        break;
      }

      case 'gateway':
        processXML += ''
          .concat(tab(4), '<exclusiveGateway id="')
          .concat(node.id, '" name="')
          .concat(node.label, '"></exclusiveGateway>\n');
        break;

      case 'exclusiveGateway':
        processXML += ''
          .concat(tab(4), '<exclusiveGateway id="')
          .concat(node.id, '" name="')
          .concat(node.label, '"></exclusiveGateway>\n');
        break;

      case 'parallelGateway':
        processXML += ''
          .concat(tab(4), '<parallelGateway id="')
          .concat(node.id, '" name="')
          .concat(node.label, '"></parallelGateway>\n');
        break;

      case 'inclusiveGateway':
        processXML += ''
          .concat(tab(4), '<inclusiveGateway id="')
          .concat(node.id, '" name="')
          .concat(node.label, '"></inclusiveGateway>\n');
        break;

      default:
        break;
    }
  });
  json.edges.forEach(function(edge) {
    BPMNEdge +=
      ''
        .concat(tab(6), '<bpmndi:BPMNEdge bpmnElement="')
        .concat(edge.source, '_')
        .concat(edge.sourceAnchor, '-')
        .concat(edge.target, '_')
        .concat(edge.targetAnchor, '" ') +
      'id="BPMNEdge_'
        .concat(edge.source, '_')
        .concat(edge.sourceAnchor, '-')
        .concat(edge.target, '_')
        .concat(edge.targetAnchor, '">\n') +
      ''
        .concat(tab(8), '<omgdi:waypoint x="')
        .concat(edge.startPoint.x, '" y="')
        .concat(edge.startPoint.y, '"></omgdi:waypoint>\n') +
      ''
        .concat(tab(8), '<omgdi:waypoint x="')
        .concat(edge.endPoint.x, '" y="')
        .concat(edge.endPoint.y, '"></omgdi:waypoint>\n') +
      ''.concat(tab(6), '</bpmndi:BPMNEdge>\n');
    var condition = '';

    if (edge.coditionExpression) {
      condition = ''
        .concat(tab(6), '<conditionExpression xsi:type="tFormalExpression"><![CDATA[')
        .concat(edge.coditionExpression, ']]></conditionExpression>\n');
    }

    processXML += ''
      .concat(tab(4), '<sequenceFlow id="')
      .concat(edge.source, '_')
      .concat(edge.sourceAnchor, '-')
      .concat(edge.target, '_')
      .concat(edge.targetAnchor, '" sourceRef="')
      .concat(edge.source, '" targetRef="')
      .concat(edge.target, '">')
      .concat(condition, '</sequenceFlow>\n');
  });
  processXML += ''.concat(tab(2), '</process>\n');
  var BPMNDiagram =
    ''.concat(tab(2), '<bpmndi:BPMNDiagram id="BPMNDiagram_').concat(id, '">\n') +
    ''
      .concat(tab(4), '<bpmndi:BPMNPlane bpmnElement="')
      .concat(id, '" id="BPMNPlane_')
      .concat(id, '">\n')
      .concat(BPMNShape)
      .concat(BPMNEdge)
      .concat(tab(4), '</bpmndi:BPMNPlane>\n') +
    ''.concat(tab(2), '</bpmndi:BPMNDiagram>\n');
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml +=
    '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    'xmlns:flowable="http://flowable.org/bpmn" ' +
    'xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' +
    'xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" ' +
    'xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" ' +
    'typeLanguage="http://www.w3.org/2001/XMLSchema" ' +
    'expressionLanguage="http://www.w3.org/1999/XPath" ' +
    'targetNamespace="http://www.flowable.org/processdef">\n';
  xml += signals;
  xml += messages;
  xml += processXML;
  xml += BPMNDiagram;
  xml += '</definitions>';

  if (createFile) {
    var blob = new Blob([xml], {
      type: 'application/xml;charset=utf-8;',
    });
    var filename = ''.concat(name, '.bpmn20.xml');
    var link = document.createElement('a');

    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return xml;
}

var LangContext = React__default.createContext();

var css$1 =
  '.index_detailPanel__2xFqX {\n  height: 100%;\n  background: #f0f2f5;\n  flex: 0 0 auto;\n  float: left;\n  width: 20%;\n  border-right: 1px solid #E9E9E9;\n  border-bottom: 1px solid #E9E9E9;\n}\n.index_panelTitle__1DtW7 {\n  height: 32px;\n  padding-left: 12px;\n  color: #000;\n  line-height: 28px;\n  background: #EBEEF2;\n  border-bottom: 1px solid #DCE3E8;\n}\n.index_panelBody__aask5 .index_panelRow__yS0gl {\n  display: inline-block;\n  font-size: 12px;\n  width: 100%;\n  padding: 5px 12px;\n}\n.index_panelBody__aask5 .index_panelRow__yS0gl .index_panelInput__1ikJ8 {\n  margin-top: 3px;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.index_panelBody__aask5 .index_panelRow__yS0gl .index_panelInput__1ikJ8:hover {\n  border-color: #1890ff;\n}\n';
var styles$1 = {
  detailPanel: 'index_detailPanel__2xFqX',
  panelTitle: 'index_panelTitle__1DtW7',
  panelBody: 'index_panelBody__aask5',
  panelRow: 'index_panelRow__yS0gl',
  panelInput: 'index_panelInput__1ikJ8',
};
styleInject(css$1);

var DefaultDetail = function DefaultDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'div',
      {
        className: styles$1.panelRow,
      },
      React__default.createElement('div', null, i18n['label'], '\uFF1A'),
      React__default.createElement(Input, {
        style: {
          width: '100%',
          fontSize: 12,
        },
        value: model.label,
        onChange: function onChange(e) {
          return _onChange('label', e.target.value);
        },
        disabled: readOnly,
      }),
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelRow,
      },
      React__default.createElement(
        Checkbox,
        {
          onChange: function onChange(e) {
            return _onChange('hideIcon', e.target.checked);
          },
          disabled: readOnly,
          checked: !!model.hideIcon,
        },
        i18n['hideIcon'],
      ),
    ),
  );
};

var UserTaskDetail = function UserTaskDetail(_ref) {
  var model = _ref.model,
    users = _ref.users,
    groups = _ref.groups,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['userTask'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['userTask.assignType'], '\uFF1A'),
        React__default.createElement(
          Select,
          {
            style: {
              width: '100%',
              fontSize: 12,
            },
            placeholder: i18n['userTask.assignType.placeholder'],
            defaultValue: 'person',
            value: model.assignType,
            onChange: function onChange(e) {
              _onChange('assignValue', []);

              _onChange('assignType', e);
            },
            disabled: readOnly,
          },
          React__default.createElement(
            Select.Option,
            {
              value: 'person',
            },
            i18n['userTask.assignType.person'],
          ),
          React__default.createElement(
            Select.Option,
            {
              value: 'persongroup',
            },
            i18n['userTask.assignType.persongroup'],
          ),
          React__default.createElement(
            Select.Option,
            {
              value: 'custom',
            },
            i18n['userTask.assignType.custom'],
          ),
        ),
      ),
      model.assignType === 'person' &&
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['userTask.assignType.person.title'],
            '\uFF1A',
          ),
          React__default.createElement(
            Select,
            {
              mode: 'multiple',
              showSearch: true,
              style: {
                width: '100%',
                fontSize: 12,
              },
              placeholder: i18n['userTask.assignType.person.placeholder'],
              optionFilterProp: 'children',
              defaultValue: model.assignValue,
              onChange: function onChange(e) {
                return _onChange('assignValue', e);
              },
              filterOption: function filterOption(input, option) {
                return option.props.title.indexOf(input) >= 0;
              },
              disabled: readOnly,
            },
            users &&
              users.map(function(user) {
                return React__default.createElement(
                  Select.Option,
                  {
                    value: user.id,
                  },
                  user.name,
                );
              }),
          ),
        ),
      model.assignType === 'persongroup' &&
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['userTask.assignType.persongroup.title'],
            '\uFF1A',
          ),
          React__default.createElement(
            Select,
            {
              mode: 'multiple',
              showSearch: true,
              style: {
                width: '100%',
                fontSize: 12,
              },
              placeholder: i18n['userTask.assignType.persongroup.placeholder'],
              optionFilterProp: 'children',
              defaultValue: model.assignValue,
              onChange: function onChange(e) {
                return _onChange('assignValue', e);
              },
              filterOption: function filterOption(input, option) {
                return option.props.title.indexOf(input) >= 0;
              },
              disabled: readOnly,
            },
            groups &&
              groups.map(function(group) {
                return React__default.createElement(
                  Select.Option,
                  {
                    value: group.id,
                  },
                  group.name,
                );
              }),
          ),
        ),
      model.assignType === 'custom' &&
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['userTask.assignType.custom.title'],
            '\uFF1A',
          ),
          React__default.createElement(Input, {
            style: {
              width: '100%',
              fontSize: 12,
            },
            value: model.javaClass,
            onChange: function onChange(e) {
              _onChange('javaClass', e.target.value);
            },
            disabled: readOnly,
          }),
        ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement(
          'div',
          {
            style: {
              display: 'inline',
            },
          },
          i18n['userTask.dueDate'],
          '\uFF1A',
        ),
        React__default.createElement(DatePicker, {
          defaultValue: model.dueDate ? moment(model.dueDate) : null,
          disabled: readOnly,
          placeholder: i18n['userTask.dueDate.placeholder'],
          showTime: true,
          style: {
            width: '100%',
            minWidth: null,
          },
          onChange: function onChange(value, dateString) {
            return _onChange('dueDate', value);
          },
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement(
          Checkbox,
          {
            onChange: function onChange(e) {
              return _onChange('isSequential', e.target.checked);
            },
            disabled: readOnly,
            checked: !!model.isSequential,
          },
          i18n['userTask.counterSign'],
        ),
      ),
    ),
  );
};

var ScriptTaskDetail = function ScriptTaskDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['scriptTask'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['scriptTask.script'], '\uFF1A'),
        React__default.createElement(Input.TextArea, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          rows: 4,
          value: model.script,
          onChange: function onChange(e) {
            _onChange('script', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
    ),
  );
};

var JavaTaskDetail = function JavaTaskDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['javaTask'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['javaTask.javaClass'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.javaClass,
          onChange: function onChange(e) {
            _onChange('javaClass', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
    ),
  );
};

var ReceiveTaskDetail = function ReceiveTaskDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['receiveTask'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['receiveTask.waitState'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.waitState,
          onChange: function onChange(e) {
            _onChange('waitState', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['receiveTask.stateValue'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.stateValue,
          onChange: function onChange(e) {
            _onChange('stateValue', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
    ),
  );
};

var MailTaskDetail = function MailTaskDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['mailTask'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['mailTask.to'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.to,
          onChange: function onChange(e) {
            _onChange('to', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['mailTask.subject'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.subject,
          onChange: function onChange(e) {
            _onChange('subject', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['mailTask.content'], '\uFF1A'),
        React__default.createElement(Input.TextArea, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          rows: 4,
          value: model.content,
          onChange: function onChange(e) {
            _onChange('content', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
    ),
  );
};

var TimerEventDetail = function TimerEventDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['timerEvent'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['timerEvent.cycle'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.cycle,
          onChange: function onChange(e) {
            _onChange('cycle', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['timerEvent.duration'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.duration,
          onChange: function onChange(e) {
            _onChange('duration', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
    ),
  );
};

var SignalEventDetail = function SignalEventDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$signalDefs = _ref.signalDefs,
    signalDefs = _ref$signalDefs === void 0 ? [] : _ref$signalDefs;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['signalEvent'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['signalEvent.signal'], '\uFF1A'),
        React__default.createElement(
          Select,
          {
            style: {
              width: '100%',
              fontSize: 12,
            },
            placeholder: i18n['signalEvent.signal'],
            defaultValue: model.signal,
            onChange: function onChange(e) {
              return _onChange('signal', e);
            },
            disabled: readOnly,
          },
          signalDefs &&
            signalDefs.map(function(signalDef) {
              return React__default.createElement(
                Select.Option,
                {
                  value: signalDef.id,
                },
                signalDef.name,
              );
            }),
        ),
      ),
    ),
  );
};

var MessageEventDetail = function MessageEventDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$messageDefs = _ref.messageDefs,
    messageDefs = _ref$messageDefs === void 0 ? [] : _ref$messageDefs;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['signalEvent'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['messageEvent.message'], '\uFF1A'),
        React__default.createElement(
          Select,
          {
            style: {
              width: '100%',
              fontSize: 12,
            },
            placeholder: i18n['messageEvent.message'],
            defaultValue: model.message,
            onChange: function onChange(e) {
              return _onChange('message', e);
            },
            disabled: readOnly,
          },
          messageDefs &&
            messageDefs.map(function(messageDef) {
              return React__default.createElement(
                Select.Option,
                {
                  value: messageDef.id,
                },
                messageDef.name,
              );
            }),
        ),
      ),
    ),
  );
};

var GatewayDetail = function GatewayDetail(_ref) {
  var model = _ref.model,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title =
    model.clazz === 'exclusiveGateway' || model.clazz === 'gateway'
      ? i18n['exclusiveGateway']
      : model.clazz === 'parallelGateway'
      ? i18n['parallelGateway']
      : i18n['inclusiveGateway'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    ),
  );
};

var FlowDetail = function FlowDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['sequenceFlow'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: _onChange,
        readOnly: readOnly,
      }),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['sequenceFlow.expression'], '\uFF1A'),
        React__default.createElement(Input.TextArea, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          rows: 4,
          value: model.conditionExpression,
          onChange: function onChange(e) {
            _onChange('conditionExpression', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement('div', null, i18n['sequenceFlow.seq'], '\uFF1A'),
        React__default.createElement(Input, {
          style: {
            width: '100%',
            fontSize: 12,
          },
          value: model.seq,
          onChange: function onChange(e) {
            _onChange('seq', e.target.value);
          },
          disabled: readOnly,
        }),
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelRow,
        },
        React__default.createElement(
          Checkbox,
          {
            onChange: function onChange(e) {
              return _onChange('reverse', e.target.checked);
            },
            disabled: readOnly,
            checked: !!model.reverse,
          },
          i18n['sequenceFlow.reverse'],
        ),
      ),
    ),
  );
};

var StartEventDetail = function StartEventDetail(_ref) {
  var model = _ref.model,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['startEvent'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    ),
  );
};

var EndEventDetail = function EndEventDetail(_ref) {
  var model = _ref.model,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  var title = i18n['endEvent'];
  return React__default.createElement(
    'div',
    {
      'data-clazz': model.clazz,
    },
    React__default.createElement(
      'div',
      {
        className: styles$1.panelTitle,
      },
      title,
    ),
    React__default.createElement(
      'div',
      {
        className: styles$1.panelBody,
      },
      React__default.createElement(DefaultDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    ),
  );
};

var DataTableModal = function DataTableModal(_ref) {
  var visible = _ref.visible,
    title = _ref.title,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    data = _ref.data,
    cols = _ref.cols,
    newRowKeyPrefix = _ref.newRowKeyPrefix,
    lang = _ref.lang;

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    changedData = _useState2[0],
    setChangedData = _useState2[1];

  var handleOk = function handleOk() {
    var updateData = data
      .map(function(d) {
        var updater = changedData.find(function(s) {
          return d.id === s.id;
        });

        if (updater) {
          if (updater.isDelete) {
            return;
          } else {
            var u = _objectSpread2(_objectSpread2({}, d), updater);

            delete u.isNew;
            delete u.isUpdate;
            return u;
          }
        }

        return d;
      })
      .filter(function(s) {
        return !!s;
      });
    var newData = changedData
      .filter(function(s) {
        return s.isNew;
      })
      .map(function(s) {
        delete s.isNew;
        delete s.isUpdate;
        return s;
      });
    var result = newData.concat(updateData);
    onOk(result);
  };

  var handleCancel = function handleCancel() {
    setChangedData([]);
    onCancel();
  };

  return React__default.createElement(
    Modal,
    {
      title: title,
      destroyOnClose: true,
      visible: visible,
      onOk: handleOk,
      onCancel: handleCancel,
      width: 800,
      maskClosable: false,
    },
    React__default.createElement(EditableTable, {
      title: '',
      lang: lang,
      newRowKeyPrefix: newRowKeyPrefix,
      showTopPager: false,
      showToolbar: false,
      loading: false,
      data: data,
      changedData: changedData,
      pageSize: data.length,
      total: data.length,
      cols: cols,
      onChangedDataUpdate: function onChangedDataUpdate(d) {
        setChangedData(d);
      },
    }),
  );
};

var ProcessDetail = function ProcessDetail(_ref) {
  var model = _ref.model,
    _onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n,
    lang = _useContext.lang;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dataObjsModalVisible = _useState2[0],
    setDataObjsModalVisible = _useState2[1];

  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    signalDefsModalVisible = _useState4[0],
    setSignalDefsModalVisible = _useState4[1];

  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    messageDefsModalVisible = _useState6[0],
    setMessageDefsModalVisible = _useState6[1];

  var dataObjCols = [
    {
      title: i18n['process.dataObjs.id'],
      dataIndex: 'id',
      editable: false,
    },
    {
      title: i18n['process.dataObjs.name'],
      dataIndex: 'name',
      editable: true,
    },
    {
      title: i18n['process.dataObjs.type'],
      dataIndex: 'type',
      editable: true,
      editor: {
        type: 'select',
        options: [
          {
            key: 'string',
            value: 'string',
          },
          {
            key: 'boolean',
            value: 'boolean',
          },
          {
            key: 'datetime',
            value: 'datetime',
          },
          {
            key: 'double',
            value: 'double',
          },
          {
            key: 'int',
            value: 'int',
          },
          {
            key: 'long',
            value: 'long',
          },
        ],
      },
    },
    {
      title: i18n['process.dataObjs.defaultValue'],
      dataIndex: 'defaultValue',
      editable: true,
    },
  ];
  var signalCols = [
    {
      title: i18n['process.dataObjs.id'],
      dataIndex: 'id',
      editable: false,
    },
    {
      title: i18n['process.dataObjs.name'],
      dataIndex: 'name',
      editable: true,
    },
    {
      title: i18n['process.signalDef.scope'],
      dataIndex: 'scope',
      editable: true,
      editor: {
        type: 'select',
        options: [
          {
            key: 'global',
            value: 'global',
          },
          {
            key: 'processInstance',
            value: 'processInstance',
          },
        ],
      },
    },
  ];
  var messageCols = [
    {
      title: i18n['process.dataObjs.id'],
      dataIndex: 'id',
      editable: false,
    },
    {
      title: i18n['process.dataObjs.name'],
      dataIndex: 'name',
      editable: true,
    },
  ];
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'div',
      {
        'data-clazz': model.clazz,
      },
      React__default.createElement(
        'div',
        {
          className: styles$1.panelTitle,
        },
        i18n['process'],
      ),
      React__default.createElement(
        'div',
        {
          className: styles$1.panelBody,
        },
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement('div', null, i18n['process.id'], '\uFF1A'),
          React__default.createElement(Input, {
            style: {
              width: '100%',
              fontSize: 12,
            },
            value: model.id,
            onChange: function onChange(e) {
              return _onChange('id', e.target.value);
            },
            disabled: readOnly,
          }),
        ),
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement('div', null, i18n['process.name'], '\uFF1A'),
          React__default.createElement(Input, {
            style: {
              width: '100%',
              fontSize: 12,
            },
            value: model.name,
            onChange: function onChange(e) {
              return _onChange('name', e.target.value);
            },
            disabled: readOnly,
          }),
        ),
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['process.dataObjs'],
            '\uFF1A',
            React__default.createElement(
              Button,
              {
                disabled: readOnly,
                onClick: function onClick() {
                  return setDataObjsModalVisible(true);
                },
              },
              i18n['tooltip.edit'],
            ),
          ),
        ),
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['process.signalDefs'],
            '\uFF1A',
            React__default.createElement(
              Button,
              {
                disabled: readOnly,
                onClick: function onClick() {
                  return setSignalDefsModalVisible(true);
                },
              },
              i18n['tooltip.edit'],
            ),
          ),
        ),
        React__default.createElement(
          'div',
          {
            className: styles$1.panelRow,
          },
          React__default.createElement(
            'div',
            null,
            i18n['process.messageDefs'],
            '\uFF1A',
            React__default.createElement(
              Button,
              {
                disabled: readOnly,
                onClick: function onClick() {
                  return setMessageDefsModalVisible(true);
                },
              },
              i18n['tooltip.edit'],
            ),
          ),
        ),
      ),
    ),
    React__default.createElement(DataTableModal, {
      title: i18n['process.dataObjs'],
      lang: lang,
      newRowKeyPrefix: 'dataObj',
      cols: dataObjCols,
      data: model.dataObjs,
      visible: dataObjsModalVisible,
      onOk: function onOk(d) {
        setDataObjsModalVisible(false);

        _onChange('dataObjs', d);
      },
      onCancel: function onCancel() {
        return setDataObjsModalVisible(false);
      },
    }),
    React__default.createElement(DataTableModal, {
      title: i18n['process.signalDefs'],
      lang: lang,
      newRowKeyPrefix: 'signal',
      cols: signalCols,
      data: model.signalDefs,
      visible: signalDefsModalVisible,
      onOk: function onOk(d) {
        setSignalDefsModalVisible(false);

        _onChange('signalDefs', d);
      },
      onCancel: function onCancel() {
        return setSignalDefsModalVisible(false);
      },
    }),
    React__default.createElement(DataTableModal, {
      title: i18n['process.messageDefs'],
      lang: lang,
      newRowKeyPrefix: 'message',
      cols: messageCols,
      data: model.messageDefs,
      visible: messageDefsModalVisible,
      onOk: function onOk(d) {
        setMessageDefsModalVisible(false);

        _onChange('messageDefs', d);
      },
      onCancel: function onCancel() {
        return setMessageDefsModalVisible(false);
      },
    }),
  );
};

var DetailPanel = forwardRef(function(_ref, ref) {
  var height = _ref.height,
    model = _ref.model,
    users = _ref.users,
    groups = _ref.groups,
    messageDefs = _ref.messageDefs,
    signalDefs = _ref.signalDefs,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;
  return React__default.createElement(
    'div',
    {
      ref: ref,
      className: styles$1.detailPanel,
      style: {
        height: height,
      },
    },
    model.clazz === 'userTask' &&
      React__default.createElement(UserTaskDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
        users: users,
        groups: groups,
      }),
    model.clazz === 'scriptTask' &&
      React__default.createElement(ScriptTaskDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'javaTask' &&
      React__default.createElement(JavaTaskDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'receiveTask' &&
      React__default.createElement(ReceiveTaskDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'mailTask' &&
      React__default.createElement(MailTaskDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    (model.clazz === 'timerStart' || model.clazz === 'timerCatch') &&
      React__default.createElement(TimerEventDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    (model.clazz === 'signalStart' || model.clazz === 'signalCatch') &&
      React__default.createElement(SignalEventDetail, {
        model: model,
        signalDefs: signalDefs,
        onChange: onChange,
        readOnly: readOnly,
      }),
    (model.clazz === 'messageStart' || model.clazz === 'messageCatch') &&
      React__default.createElement(MessageEventDetail, {
        model: model,
        messageDefs: messageDefs,
        onChange: onChange,
        readOnly: readOnly,
      }),
    (model.clazz === 'gateway' ||
      model.clazz === 'exclusiveGateway' ||
      model.clazz === 'parallelGateway' ||
      model.clazz === 'inclusiveGateway') &&
      React__default.createElement(GatewayDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'flow' &&
      React__default.createElement(FlowDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'start' &&
      React__default.createElement(StartEventDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'end' &&
      React__default.createElement(EndEventDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
    model.clazz === 'process' &&
      React__default.createElement(ProcessDetail, {
        model: model,
        onChange: onChange,
        readOnly: readOnly,
      }),
  );
});

var css$2 =
  '.index_itemPanel__1TzSA {\n  float: left;\n  width: 10%;\n  background: #f0f2f5;\n  overflow-y: auto;\n  border-left: 1px solid #E9E9E9;\n  border-bottom: 1px solid #E9E9E9;\n}\n.index_itemPanel__1TzSA .ant-collapse {\n  border: 0;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item {\n  border-bottom: 0;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item .ant-collapse-header {\n  text-align: left;\n  border: 1px solid #E9E9E9;\n  border-left: 0;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item .ant-collapse-header[aria-expanded=false] {\n  border-bottom: 0;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item:first-child .ant-collapse-header {\n  border-top: 0;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item:last-child .ant-collapse-header {\n  border-bottom: 1px solid #E9E9E9;\n}\n.index_itemPanel__1TzSA .ant-collapse .ant-collapse-item .ant-collapse-content {\n  border-top: 0;\n  background: #f0f2f5;\n  text-align: center;\n}\n.index_itemPanel__1TzSA img {\n  width: 92px;\n  height: 96px;\n  padding: 4px;\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 2px;\n}\n.index_itemPanel__1TzSA img:hover {\n  border: 1px solid #ccc;\n  cursor: move;\n}\n';
var styles$2 = { itemPanel: 'index_itemPanel__1TzSA' };
styleInject(css$2);

var Panel = Collapse.Panel;
var ItemPanel = forwardRef(function(_ref, ref) {
  var height = _ref.height;

  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  return React__default.createElement(
    'div',
    {
      ref: ref,
      className: styles$2.itemPanel,
      style: {
        height: height,
      },
    },
    React__default.createElement(
      Collapse,
      {
        bordered: false,
        defaultActiveKey: [],
      },
      React__default.createElement(
        Panel,
        {
          header: i18n['start'],
          key: '1',
          forceRender: true,
        },
        React__default.createElement('img', {
          'data-item': "{clazz:'start',size:'30*30',label:''}",
          src: require('../assets/flow/start.svg'),
          style: {
            width: 42,
            height: 42,
          },
        }),
        React__default.createElement('div', null, i18n['startEvent']),
        React__default.createElement('img', {
          'data-item': "{clazz:'timerStart',size:'30*30',label:''}",
          src: require('../assets/flow/timer-start.svg'),
          style: {
            width: 42,
            height: 42,
          },
        }),
        React__default.createElement('div', null, i18n['timerEvent']),
        React__default.createElement('img', {
          'data-item': "{clazz:'messageStart',size:'30*30',label:''}",
          src: require('../assets/flow/message-start.svg'),
          style: {
            width: 42,
            height: 42,
          },
        }),
        React__default.createElement('div', null, i18n['messageEvent']),
        React__default.createElement('img', {
          'data-item': "{clazz:'signalStart',size:'30*30',label:''}",
          src: require('../assets/flow/signal-start.svg'),
          style: {
            width: 42,
            height: 42,
          },
        }),
        React__default.createElement('div', null, i18n['signalEvent']),
      ),
      React__default.createElement(
        Panel,
        {
          header: i18n['task'],
          key: '2',
          forceRender: true,
        },
        React__default.createElement('img', {
          'data-item': "{clazz:'userTask',size:'80*44',label:'" + i18n['userTask'] + "'}",
          src: require('../assets/flow/user-task.svg'),
          style: {
            width: 80,
            height: 44,
          },
        }),
        React__default.createElement('div', null, i18n['userTask']),
        React__default.createElement('img', {
          'data-item': "{clazz:'scriptTask',size:'80*44',label:'" + i18n['scriptTask'] + "'}",
          src: require('../assets/flow/script-task.svg'),
          style: {
            width: 80,
            height: 44,
          },
        }),
        React__default.createElement('div', null, i18n['scriptTask']),
        React__default.createElement('img', {
          'data-item': "{clazz:'javaTask',size:'80*44',label:'" + i18n['javaTask'] + "'}",
          src: require('../assets/flow/java-task.svg'),
          style: {
            width: 80,
            height: 44,
          },
        }),
        React__default.createElement('div', null, i18n['javaTask']),
        React__default.createElement('img', {
          'data-item': "{clazz:'mailTask',size:'80*44',label:'" + i18n['mailTask'] + "'}",
          src: require('../assets/flow/mail-task.svg'),
          style: {
            width: 80,
            height: 44,
          },
        }),
        React__default.createElement('div', null, i18n['mailTask']),
        React__default.createElement('img', {
          'data-item': "{clazz:'receiveTask',size:'80*44',label:'" + i18n['receiveTask'] + "'}",
          src: require('../assets/flow/receive-task.svg'),
          style: {
            width: 80,
            height: 44,
          },
        }),
        React__default.createElement('div', null, i18n['receiveTask']),
      ),
      React__default.createElement(
        Panel,
        {
          header: i18n['gateway'],
          key: '3',
          forceRender: true,
        },
        React__default.createElement('img', {
          'data-item': "{clazz:'exclusiveGateway',size:'40*40',label:''}",
          src: require('../assets/flow/exclusive-gateway.svg'),
          style: {
            width: 48,
            height: 48,
          },
        }),
        React__default.createElement('div', null, i18n['exclusiveGateway']),
        React__default.createElement('img', {
          'data-item': "{clazz:'parallelGateway',size:'40*40',label:''}",
          src: require('../assets/flow/parallel-gateway.svg'),
          style: {
            width: 48,
            height: 48,
          },
        }),
        React__default.createElement('div', null, i18n['parallelGateway']),
        React__default.createElement('img', {
          'data-item': "{clazz:'inclusiveGateway',size:'40*40',label:''}",
          src: require('../assets/flow/inclusive-gateway.svg'),
          style: {
            width: 48,
            height: 48,
          },
        }),
        React__default.createElement('div', null, i18n['inclusiveGateway']),
      ),
      React__default.createElement(
        Panel,
        {
          header: i18n['catch'],
          key: '4',
          forceRender: true,
        },
        React__default.createElement('img', {
          'data-item': "{clazz:'timerCatch',size:'50*30',label:''}",
          src: require('../assets/flow/timer-catch.svg'),
          style: {
            width: 58,
            height: 38,
          },
        }),
        React__default.createElement('div', null, i18n['timerEvent']),
        React__default.createElement('img', {
          'data-item': "{clazz:'messageCatch',size:'50*30',label:''}",
          src: require('../assets/flow/message-catch.svg'),
          style: {
            width: 58,
            height: 38,
          },
        }),
        React__default.createElement('div', null, i18n['messageEvent']),
        React__default.createElement('img', {
          'data-item': "{clazz:'signalCatch',size:'50*30',label:''}",
          src: require('../assets/flow/signal-catch.svg'),
          style: {
            width: 58,
            height: 38,
          },
        }),
        React__default.createElement('div', null, i18n['signalEvent']),
      ),
      React__default.createElement(
        Panel,
        {
          header: i18n['end'],
          key: '5',
          forceRender: true,
        },
        React__default.createElement('img', {
          'data-item': "{clazz:'end',size:'30*30',label:''}",
          src: require('../assets/flow/end.svg'),
          style: {
            width: 42,
            height: 42,
          },
        }),
        React__default.createElement('div', null, i18n['endEvent']),
      ),
    ),
  );
});

var css$3 =
  '@font-face {font-family: "iconfont";\n  src: url(\'../assets/iconfont/iconfont.eot?t=1566199791492\'); /* IE9 */\n  src: url(\'../assets/iconfont/iconfont.eot?t=1566199791492#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n  url(\'data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAcAAAsAAAAADpQAAAaxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEDAqOYIwsATYCJAMwCxoABCAFhG0HgRgbfgwRFaRNk31xwJtlDgk+MOVxQXRyaUUvEcOvh1L6fLRpf3Z2yDKzQJKKkrpx9xpO2HclW1NIHULFhKWqSMUd6kJ65uRcNwAaIGCsNcI4sPGTazJNzYadqRukyZi1tuuOPGLPPU/tak0tsnAYPhdhSlbcPWZDfCUgWZadatQRqkAkiYVNXVWcr5GFduE9wyJlsww3ymh4pnsVR/t0IAA48tAQxKt36AEFMriW4DYjhw0pghKyQc6JJ1CMlpRdZUpWgUGRFksPAKy0f558g+ZEASQwCn6mLoMLBkLL3C/ZQw3TQF9qwKiPAtguBVAADQHIW8PU1OzxoC40tHU8rbEMHYAilpKAzLOSHSV7TJP63w/YzY+FKihLtgZkMFiQBQVWcAhMJdD9P88CrlNxcNQiMIOcjkAGMg8QMCDzEIEFyDxCkAVkHiNQgMwTBFYg85SCQz4cLoAA4DACApTsRiABJXsmg/Zp7fIA6gOSD6BlSHDfpRgIKGQQMOEvL50FaqeWHJrnLKfK3J1XpixWtbLX4FWrVbwiu9Bqt8v538FWTp1mXxIvyxJ7y9l8UnRXfwhwosq20SqzwUb86pJdkI1YGVvAx/u8fFmYTvuKi/0vXvTwxYzS0ShXSy5KI2JpDBOMfZwjCUsOEMITIgeFIAlL9wOi07DonrL+Sy/4maugsfHidV9sXSjAVdU4nQ4ICx+h2/qLlWnnMxK5e33QI2qUicWEbWmiHI3wJVFMqZdpk/SgI4/EQ0v2ATyFxn4hQJ1EIkFI5MAk6OKleTQKGPuXHiREVK/IgZHxMvE4h/GJ14nE+9x4UXV7uuD2yxo7imfIxiFuX3KFMB5JjoNQ69LLl60uVwhxCJ9ddoQ4FT4dJtSz0F+YSJS1IdSif5B0mXR9MIWijlUO2ZsY7cMtC309QkWhwgMW8OH6Xc8mfEIdhkhdqSJBBpHH4CO5o20iPrioR8hXY+E00cPfZfnit9LpGZx0igF8ImdCMrqoPC8mRqhEkI0H64jd+ytA+DnENCrtpo7Y3t6c9FMBrZCrTqVjt8nxL/lm0LDwH6y61f4kmEzu9apH3zQMLZUCUh5TQwpaMhl0OPgC/v+q2p5p4bCB5Hp3h5OFw7FN+vJKjUTTvmdHj0EfbOqY32rESG9O2xbNZDf/3uouVZoVyQh/5IAjGHQgz9q8ilLy0889Oz64hnstvX2brhU+YrD+Zt4G48ecezvmfHh3urR9u4RmehMs0hYwTU3DZo82kNLnDC6yoWe2QKoftm3bbl5IsUirLN478Lkj2s9VgaVKSU09gWZ25MG+Idczl7p+fXQvq6NDz93NurRpw5gNXewl0VLSNOc1p+6s7tzgBKaY0EkuOHPV/PAt7VbSo2t6OOmGe0S7wmzYZj8fpI4f5A242py3umHelr87IZ994vV84Q0z5S4bX2FqT/S2CwLsk1bN1Zrh2l3vt7B84p0/tbv46x1Ph4KfPe1HdnjQnH3Sff60buq3Xy47GWT+wMIOtXs0mInWahDveAJNTLF+xXH1yHy22tWYnPUdNrLCtPox/EGXEczH4V7sJ29D1dvJNa/15IKGDf56J7/DhG7N4t/ANdYdXHZCtwja2jSYObBjnX5L0TS0QHcP5iYPull7fdkVbinZIYLzp2mGpiumoRumouvhAjfTy+2svef8SvTXd8Fz9c2dxvL56i2b5VZKxXRgEwqVuoPwjwBMQ86iGgDQ25IGmO/T49QNAFR73VvphbQigBqQxmaKXqAweQ/ZJl0AAHuBOYdOp2W5f5TVYKs/9N2A4/XfFPErU/aOMfYHSopnG7KtXfZvgQNz/x92Wa1dvAgc1CuFbNEzA1IKMyDMlsZkh5CFKyUAXJQBJnh+Lj5sw1AGzP2jGMr4IJ0NTiyhUFDTXw5uKGEQcEksUOCRcDRA6xyBUv9MNtn69TTMJxKCbByVSLAjCTQt+CHIOPgDCUNZfKexEE2ohMNPSh1SgHzfsOtHAs3ghPkTyWL36+Rrp+0bhFU1EYGt9wU0E3axa9z0VvcKHaiOLeZ32DN74QmbeEGbQK0oBmEGyypSOw7bJoP3WyqLbXPtkUCzqegE86eeLHY/PV/HvP8GYVVNOUOe1b+AZvJc2FEeAP6vug4asi+d53fYY0K90CsJm2t4oRSqqEZhpK+UwbISS1SOgy0ZzkN1qn1DW+MziEj8WaumG6ZlO670lB/nw/En8XR1h1f/iE2mLvFOW166ypn+ISOMYIkTn/jSQQWOFV4yShnRzhfODkbbcjn0ZCCJ1+XduNjWzQYAAA==\') format(\'woff2\'),\n  url(\'../assets/iconfont/iconfont.woff?t=1566199791492\') format(\'woff\'),\n  url(\'../assets/iconfont/iconfont.ttf?t=1566199791492\') format(\'truetype\'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url(\'../assets/iconfont/iconfont.svg?t=1566199791492#iconfont\') format(\'svg\'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-copy-o:before {\n  content: "\\E8A2";\n}\n\n.icon-undo:before {\n  content: "\\E8A5";\n}\n\n.icon-zoom-in-o:before {\n  content: "\\E8A6";\n}\n\n.icon-actual-size-o:before {\n  content: "\\E7CB";\n}\n\n.icon-redo:before {\n  content: "\\E7CC";\n}\n\n.icon-fit:before {\n  content: "\\E7CD";\n}\n\n.icon-delete-o:before {\n  content: "\\E7CE";\n}\n\n.icon-to-front:before {\n  content: "\\E7CF";\n}\n\n.icon-to-back:before {\n  content: "\\E7D0";\n}\n\n.icon-paster-o:before {\n  content: "\\E7D1";\n}\n\n.icon-zoom-out-o:before {\n  content: "\\E7D2";\n}\n\n';
styleInject(css$3);

var css$4 =
  '.index_toolbar__2VBR6 {\n  width: 100%;\n  padding: 8px 0;\n  background-color: #fff;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0 8px 12px 0 rgba(0, 52, 107, 0.04);\n}\n.index_toolbar__2VBR6 .index_command__32PCa {\n  display: inline-block;\n  margin: 0 6px;\n  line-height: 27px;\n  border: 1px solid rgba(2, 2, 2, 0);\n  border-radius: 2px;\n}\n.index_toolbar__2VBR6 .index_command__32PCa span {\n  margin: 0 6px;\n}\n.index_toolbar__2VBR6 .index_command__32PCa:nth-of-type(1) {\n  margin-left: 24px;\n}\n.index_toolbar__2VBR6 .index_command__32PCa:hover {\n  border: 1px solid #E9E9E9;\n  cursor: pointer;\n}\n.index_toolbar__2VBR6 .index_separator__2kxXH {\n  margin: 4px;\n  border-left: 1px solid #E9E9E9;\n}\n.index_toolbar__2VBR6 .index_icon-select__2DiJ4.index_disable__3JgEB {\n  background: #EEE;\n}\n.index_toolbar__2VBR6 .index_disable__3JgEB {\n  color: rgba(0, 0, 0, 0.25);\n}\n.index_toolbar__2VBR6 .index_disable__3JgEB:hover {\n  border: 1px solid rgba(2, 2, 2, 0);\n  cursor: default;\n}\n';
var styles$3 = {
  toolbar: 'index_toolbar__2VBR6',
  command: 'index_command__32PCa',
  separator: 'index_separator__2kxXH',
  'icon-select': 'index_icon-select__2DiJ4',
  disable: 'index_disable__3JgEB',
  iconSelect: 'index_icon-select__2DiJ4',
};
styleInject(css$4);

var ToolbarPanel = forwardRef(function(props, ref) {
  var _useContext = useContext(LangContext),
    i18n = _useContext.i18n;

  return React__default.createElement(
    'div',
    {
      className: styles$3.toolbar,
      ref: ref,
    },
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.undo'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'undo',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-undo',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.redo'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'redo',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-redo',
        }),
      ),
    ),
    React__default.createElement('span', {
      className: styles$3.separator,
    }),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.copy'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'copy',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-copy-o',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.paste'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'paste',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-paster-o',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.delete'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'delete',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-delete-o',
        }),
      ),
    ),
    React__default.createElement('span', {
      className: styles$3.separator,
    }),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.zoomIn'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'zoomIn',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-zoom-in-o',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.zoomOut'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'zoomOut',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-zoom-out-o',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.zoomReset'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'resetZoom',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-actual-size-o',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.autoFit'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'autoFit',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-fit',
        }),
      ),
    ),
    React__default.createElement('span', {
      className: styles$3.separator,
    }),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.toFront'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'toFront',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-to-front',
        }),
      ),
    ),
    React__default.createElement(
      Tooltip,
      {
        title: i18n['tooltip.toBack'],
      },
      React__default.createElement(
        'span',
        {
          className: styles$3.command,
          'data-command': 'toBack',
        },
        React__default.createElement('span', {
          className: 'iconfont icon-to-back',
        }),
      ),
    ),
  );
});

var editorStyle = {
  nodeActivedOutterStyle: {
    lineWidth: 0,
  },
  groupSelectedOutterStyle: {
    stroke: '#E0F0FF',
    lineWidth: 2,
  },
  nodeSelectedOutterStyle: {
    stroke: '#E0F0FF',
    lineWidth: 2,
  },
  edgeActivedStyle: {
    stroke: '#1890FF',
    strokeOpacity: 0.92,
  },
  nodeActivedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
  },
  groupActivedStyle: {
    stroke: '#1890FF',
  },
  edgeSelectedStyle: {
    lineWidth: 2,
    strokeOpacity: 0.92,
    stroke: '#A3B1BF',
  },
  nodeSelectedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
    fillOpacity: 0.4,
  },
  groupSelectedStyle: {
    stroke: '#1890FF',
    fillOpacity: 0.92,
  },
  nodeStyle: {
    stroke: '#CED4D9',
    fill: '#FFFFFF',
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 10,
    shadowColor: 'rgba(13, 26, 38, 0.08)',
    lineWidth: 1,
    radius: 4,
    strokeOpacity: 0.7,
  },
  edgeStyle: {
    stroke: '#A3B1BF',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    endArrow: true,
  },
  groupBackgroundPadding: [40, 10, 10, 10],
  groupLabelOffsetX: 10,
  groupLabelOffsetY: 10,
  edgeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle',
  },
  edgeLabelRectPadding: 4,
  edgeLabelRectStyle: {
    fill: 'white',
  },
  nodeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle',
  },
  groupStyle: {
    stroke: '#CED4D9',
    radius: 4,
  },
  groupLabelStyle: {
    fill: '#666',
    textAlign: 'left',
    textBaseline: 'top',
  },
  multiSelectRectStyle: {
    fill: '#1890FF',
    fillOpacity: 0.08,
    stroke: '#1890FF',
    opacity: 0.1,
  },
  dragNodeHoverToGroupStyle: {
    stroke: '#1890FF',
    lineWidth: 2,
  },
  dragNodeLeaveFromGroupStyle: {
    stroke: '#BAE7FF',
    lineWidth: 2,
  },
  anchorPointStyle: {
    r: 3.5,
    fill: '#fff',
    stroke: '#1890FF',
    lineAppendWidth: 12,
  },
  anchorHotsoptStyle: {
    r: 12,
    fill: '#1890FF',
    fillOpacity: 0.25,
  },
  anchorHotsoptActivedStyle: {
    r: 14,
  },
  anchorPointHoverStyle: {
    r: 4,
    fill: '#1890FF',
    fillOpacity: 1,
    stroke: '#1890FF',
  },
  nodeControlPointStyle: {
    radius: 4,
    fill: '#fff',
    shadowBlur: 4,
    shadowColor: '#666',
  },
  edgeControlPointStyle: {
    radius: 6,
    symbol: 'square',
    lineAppendWidth: 6,
    fillOpacity: 0,
    strokeOpacity: 0,
  },
  nodeSelectedBoxStyle: {
    stroke: '#C2C2C2',
  },
  cursor: {
    panningCanvas: '-webkit-grabbing',
    beforePanCanvas: '-webkit-grab',
    hoverNode: 'move',
    hoverEffectiveAnchor: 'crosshair',
    hoverEdge: 'default',
    hoverGroup: 'move',
    hoverUnEffectiveAnchor: 'default',
    hoverEdgeControllPoint: 'crosshair',
    multiSelect: 'crosshair',
  },
  nodeDelegationStyle: {
    stroke: '#1890FF',
    fill: '#1890FF',
    fillOpacity: 0.08,
    lineDash: [4, 4],
    radius: 4,
    lineWidth: 1,
  },
  edgeDelegationStyle: {
    stroke: '#1890FF',
    lineDash: [4, 4],
    lineWidth: 1,
  },
};

function registerAnchor(G6) {
  Shape.registerFactory('anchor', {
    defaultShapeType: 'marker',
    getShape: function getShape(type) {
      var shapeObj = Object.assign({}, shapeBase, {
        type: 'marker',
        itemType: type,
        drawShape: function drawShape(cfg, group) {
          var style = this.getShapeStyle(cfg);
          var shape = group.addShape('marker', {
            attrs: style,
            name: 'anchor-shape',
            draggable: true,
          });
          return shape;
        },
        setState: function setState(name, value, item) {
          if (name === 'active-anchor') {
            if (value) {
              this.update(
                {
                  style: _objectSpread2({}, editorStyle.anchorPointHoverStyle),
                },
                item,
              );
            } else {
              this.update(
                {
                  style: _objectSpread2({}, editorStyle.anchorPointStyle),
                },
                item,
              );
            }
          }
        },
      });
      return shapeObj;
    },
  });
}

function registerControlPoint(G6) {
  Shape.registerFactory('controlPoint', {
    defaultShapeType: 'marker',
    getShape: function getShape(type) {
      var shapeObj = Object.assign({}, shapeBase, {
        type: 'marker',
        itemType: type,
        drawShape: function drawShape(cfg, group) {
          var style = this.getShapeStyle(cfg);
          var shape = group.addShape('marker', {
            attrs: _objectSpread2(
              _objectSpread2({}, style),
              {},
              {
                symbol: 'square',
              },
            ),
            name: 'controlPoint-shape',
            draggable: true,
          });
          return shape;
        },
        setState: function setState(name, value, item) {
          if (name === 'active') {
            if (value) {
              this.update(
                {
                  style: _objectSpread2({}, editorStyle.pointPointHoverStyle),
                },
                item,
              );
            } else {
              this.update(
                {
                  style: _objectSpread2({}, editorStyle.pointPointStyle),
                },
                item,
              );
            }
          }
        },
      });
      return shapeObj;
    },
  });
}

var Anchor = /*#__PURE__*/ (function(_Item) {
  _inherits(Anchor, _Item);

  var _super = _createSuper(Anchor);

  function Anchor(cfg) {
    var _this;

    _classCallCheck(this, Anchor);

    _this = _super.call(
      this,
      deepMix(cfg, {
        type: 'anchor',
        isActived: false,
        model: {
          type: 'anchor',
          style: _objectSpread2(
            _objectSpread2({}, editorStyle.anchorPointStyle),
            {},
            {
              cursor: editorStyle.cursor.hoverEffectiveAnchor,
            },
          ),
        },
      }),
    );

    _this.enableCapture(true);

    _this.isAnchor = true;

    _this.toFront();

    return _this;
  }

  _createClass(Anchor, [
    {
      key: 'showHotpot',
      value: function showHotpot() {
        this.hotpot = this.getContainer().addShape('marker', {
          attrs: _objectSpread2(
            _objectSpread2({}, this.get('model').style),
            editorStyle.anchorHotsoptStyle,
          ),
          name: 'hotpot-shape',
          draggable: true,
        });
        this.hotpot.toFront();
        this.getKeyShape().toFront();
      },
    },
    {
      key: 'setActived',
      value: function setActived() {
        this.update({
          style: _objectSpread2({}, editorStyle.anchorPointHoverStyle),
        });
      },
    },
    {
      key: 'clearActived',
      value: function clearActived() {
        this.update({
          style: _objectSpread2({}, editorStyle.anchorPointStyle),
        });
      },
    },
    {
      key: 'setHotspotActived',
      value: function setHotspotActived(act) {
        this.hotpot &&
          (act
            ? this.hotpot.attr(editorStyle.anchorHotsoptActivedStyle)
            : this.hotpot.attr(editorStyle.anchorHotsoptStyle));
      },
    },
  ]);

  return Anchor;
})(Item);

var dashArray = [
  [0, 1],
  [0, 2],
  [1, 2],
  [0, 1, 1, 2],
  [0, 2, 1, 2],
  [1, 2, 1, 2],
  [2, 2, 1, 2],
  [3, 2, 1, 2],
  [4, 2, 1, 2],
];
var interval = 9;
var lineDash = [4, 2, 1, 2];
var nodeDefinition = {
  options: {
    icon: null,
    iconStyle: {
      width: 14,
      height: 14,
      left: 0,
      top: 0,
    },
    style: {
      fill: '#f9f9f9',
      stroke: '#bbb',
      cursor: 'default',
    },
    stateStyles: {
      selected: {
        fill: '#eee',
      },
      hover: {
        cursor: editorStyle.cursor.hoverNode,
      },
    },
  },
  drawAnchor: function drawAnchor(group) {
    var bbox = group.get('children')[0].getBBox();
    this.getAnchorPoints().forEach(function(p, i) {
      var anchorContainer = group.addGroup();
      var anchor = new Anchor({
        group: anchorContainer,
        index: i,
        model: {
          style: {
            x: bbox.minX + bbox.width * p[0],
            y: bbox.minY + bbox.height * p[1],
          },
        },
      });
      group.anchorShapes.push(anchorContainer);
    });
  },
  initAnchor: function initAnchor(group) {
    var _this = this;

    group.anchorShapes = [];

    group.showAnchor = function() {
      _this.drawAnchor(group);
    };

    group.getAllAnchors = function() {
      return group.anchorShapes.map(function(c) {
        c.filter(function(a) {
          return a.isAnchor;
        });
      });
    };

    group.getAnchor = function(i) {
      return group.anchorShapes.filter(function(a) {
        return a.get('index') === i;
      });
    };

    group.clearAnchor = function() {
      group.anchorShapes &&
        group.anchorShapes.forEach(function(a) {
          return a.remove();
        });
      group.anchorShapes = [];
    };

    group.clearHotpotActived = function() {
      group.anchorShapes &&
        group.anchorShapes.forEach(function(a) {
          if (a.isAnchor) a.setHotspotActived(false);
        });
    };
  },
  drawShape: function drawShape(cfg, group) {
    var shapeType = this.shapeType;
    var style = this.getShapeStyle(cfg);
    var shape = group.addShape(shapeType, {
      attrs: _objectSpread2({}, style),
    });
    this.drawIcon(cfg, group);
    this.initAnchor(group);
    return shape;
  },
  drawIcon: function drawIcon(cfg, group) {
    var style = this.getShapeStyle(cfg);

    if (this.options.icon) {
      var attrs = {
        x: style.x + this.options.iconStyle.left,
        y: style.y + this.options.iconStyle.top,
        width: this.options.iconStyle.width,
        height: this.options.iconStyle.height,
      };

      if (this.shapeType === 'circle') {
        attrs = {
          x: style.x - style.r + this.options.iconStyle.left,
          y: style.y - style.r + this.options.iconStyle.top,
          width: this.options.iconStyle.width,
          height: this.options.iconStyle.height,
        };
      } else if (this.shapeType === 'path') {
        attrs = {
          x: this.options.iconStyle.left,
          y: this.options.iconStyle.top,
          width: this.options.iconStyle.width,
          height: this.options.iconStyle.height,
        };
      }

      group.icon = group.addShape('image', {
        attrs: _objectSpread2(
          {
            img: this.options.icon,
          },
          attrs,
        ),
        draggable: true,
      });

      if (cfg.hideIcon) {
        group.icon.hide();
      }
    }
  },
  setState: function setState(name, value, item) {
    var group = item.getContainer();

    if (name === 'show-anchor') {
      if (value) {
        group.showAnchor();
      } else {
        group.clearAnchor();
      }
    } else if (name === 'selected') {
      var rect = group.getChildByIndex(0);

      if (value) {
        rect.attr('fill', this.options.stateStyles.selected.fill);
      } else {
        rect.attr('fill', this.options.style.fill);
      }
    } else if (name === 'hover') {
      var _rect = group.getChildByIndex(0);

      var text = group.getChildByIndex(1);

      if (value) {
        _rect.attr('cursor', this.options.stateStyles.hover.cursor);

        if (text) text.attr('cursor', this.options.stateStyles.hover.cursor);
      } else {
        _rect.attr('cursor', this.options.style.cursor);

        if (text) text.attr('cursor', this.options.style.cursor);
      }
    }

    this.setCustomState(name, value, item);
  },
  setCustomState: function setCustomState(name, value, item) {},
  getAnchorPoints: function getAnchorPoints() {
    return [
      [0.5, 0],
      [1, 0.5],
      [0.5, 1],
      [0, 0.5],
    ];
  },
  runAnimate: function runAnimate(cfg, group) {
    if (cfg.active) {
      var totalArray = [];
      var index = 0;
      var shape = group.getFirst();
      shape.animate(
        function(ratio) {
          for (var i = 0; i < 9; i += interval) {
            totalArray = totalArray.concat(lineDash);
          }

          var cfg = {
            lineDash: dashArray[index].concat(totalArray),
          };
          index = (index + 1) % interval;
          return cfg;
        },
        {
          repeat: true,
          duration: 5000,
        },
      );
    }
  },
  afterDraw: function afterDraw(cfg, group) {
    this.runAnimate(cfg, group);
  },
  afterUpdate: function afterUpdate(cfg, group) {
    var icon = group.get('group').icon;

    if (cfg.hideIcon && icon && icon.get('visible')) {
      icon.hide();
    } else if (!cfg.hideIcon && icon && !icon.get('visible')) {
      icon.show();
    }
  },
};
function registerNode(G6) {
  G6.registerNode('base-node', nodeDefinition, 'single-node');
}

var taskDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 12,
    height: 12,
    left: 2,
    top: 2,
  },
  style: _objectSpread2(
    _objectSpread2({}, editorStyle.nodeStyle),
    {},
    {
      fill: '#E7F7FE',
      stroke: '#1890FF',
      cursor: 'default',
    },
  ),
  stateStyles: {
    selected: {
      fill: '#95D6FB',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    },
  },
};
var gatewayDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 20,
    height: 20,
    left: 2,
    top: 2,
  },
  style: _objectSpread2(
    _objectSpread2({}, editorStyle.nodeStyle),
    {},
    {
      fill: '#E8FEFA',
      stroke: '#13C2C2',
      cursor: 'default',
    },
  ),
  stateStyles: {
    selected: {
      fill: '#8CE8DE',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    },
  },
};
var startDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 18,
    height: 18,
    left: 6,
    top: 6,
  },
  style: _objectSpread2(
    _objectSpread2({}, editorStyle.nodeStyle),
    {},
    {
      fill: '#FEF7E8',
      stroke: '#FA8C16',
      cursor: 'default',
    },
  ),
  stateStyles: {
    selected: {
      fill: '#FCD49A',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    },
  },
};
var endDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 18,
    height: 18,
    left: 6,
    top: 6,
  },
  style: _objectSpread2(
    _objectSpread2({}, editorStyle.nodeStyle),
    {},
    {
      fill: '#EFF7E8',
      stroke: '#F5222D',
      cursor: 'default',
    },
  ),
  stateStyles: {
    selected: {
      fill: '#CFD49A',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    },
  },
};
var catchDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 20,
    height: 20,
    left: -10,
    top: -8,
  },
  style: _objectSpread2(
    _objectSpread2({}, editorStyle.nodeStyle),
    {},
    {
      fill: '#FEF7E8',
      stroke: '#FA8C16',
      cursor: 'default',
    },
  ),
  stateStyles: {
    selected: {
      fill: '#FCD49A',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    },
  },
};
function registerFlowNode(G6) {
  G6.registerNode(
    'task-node',
    {
      shapeType: 'rect',
      options: _objectSpread2({}, taskDefaultOptions),
      getShapeStyle: function getShapeStyle(cfg) {
        cfg.size = [80, 44];
        var width = cfg.size[0];
        var height = cfg.size[1];

        var style = _objectSpread2(
          {
            x: 0 - width / 2,
            y: 0 - height / 2,
            width: width,
            height: height,
          },
          this.options.style,
        );

        return style;
      },
    },
    'base-node',
  );
  G6.registerNode(
    'gateway-node',
    {
      shapeType: 'path',
      labelPosition: 'bottom',
      options: _objectSpread2({}, gatewayDefaultOptions),
      getShapeStyle: function getShapeStyle(cfg) {
        cfg.size = [40, 40];
        var width = cfg.size[0];
        var height = cfg.size[1];
        var gap = 4;

        var style = _objectSpread2(
          {
            path: [
              ['M', 0 - gap, 0 - height / 2 + gap],
              ['Q', 0, 0 - height / 2, gap, 0 - height / 2 + gap],
              ['L', width / 2 - gap, 0 - gap],
              ['Q', width / 2, 0, width / 2 - gap, gap],
              ['L', gap, height / 2 - gap],
              ['Q', 0, height / 2, 0 - gap, height / 2 - gap],
              ['L', -width / 2 + gap, gap],
              ['Q', -width / 2, 0, -width / 2 + gap, 0 - gap],
              ['Z'],
            ],
          },
          this.options.style,
        );

        return style;
      },
    },
    'base-node',
  );
  G6.registerNode(
    'exclusive-gateway-node',
    {
      afterDraw: function afterDraw(cfg, group) {
        group.icon = group.addShape('path', {
          attrs: {
            path: [['M', -8, -8], ['L', 8, 8], ['Z'], ['M', 8, -8], ['L', -8, 8], ['Z']],
            lineWidth: 2,
            stroke: this.options.style.stroke,
          },
        });
        this.runAnimate(cfg, group);
      },
    },
    'gateway-node',
  );
  G6.registerNode(
    'parallel-gateway-node',
    {
      afterDraw: function afterDraw(cfg, group) {
        group.icon = group.addShape('path', {
          attrs: {
            path: [['M', 0, -10], ['L', 0, 10], ['Z'], ['M', -10, 0], ['L', 10, 0], ['Z']],
            lineWidth: 2,
            stroke: this.options.style.stroke,
          },
        });
        this.runAnimate(cfg, group);
      },
    },
    'gateway-node',
  );
  G6.registerNode(
    'inclusive-gateway-node',
    {
      afterDraw: function afterDraw(cfg, group) {
        group.icon = group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: 10,
            lineWidth: 2,
            stroke: this.options.style.stroke,
          },
        });
        this.runAnimate(cfg, group);
      },
    },
    'gateway-node',
  );
  G6.registerNode(
    'start-node',
    {
      shapeType: 'circle',
      labelPosition: 'bottom',
      options: _objectSpread2({}, startDefaultOptions),
      getShapeStyle: function getShapeStyle(cfg) {
        cfg.size = [30, 30];
        var width = cfg.size[0];

        var style = _objectSpread2(
          {
            x: 0,
            y: 0,
            r: width / 2,
          },
          this.options.style,
        );

        return style;
      },
      afterDraw: function afterDraw(cfg, group) {
        group.icon = group.addShape('path', {
          attrs: {
            path: [['M', -4, -6], ['L', 6, 0], ['L', -4, 6], ['Z']],
            fill: this.options.style.stroke,
            stroke: this.options.style.stroke,
          },
          draggable: true,
        });
      },
      getAnchorPoints: function getAnchorPoints() {
        return [
          [0.5, 0],
          [1, 0.5],
          [0.5, 1],
        ];
      },
    },
    'base-node',
  );
  G6.registerNode(
    'end-node',
    {
      shapeType: 'circle',
      labelPosition: 'bottom',
      options: _objectSpread2({}, endDefaultOptions),
      getShapeStyle: function getShapeStyle(cfg) {
        cfg.size = [30, 30];
        var width = cfg.size[0];

        var style = _objectSpread2(
          {
            x: 0,
            y: 0,
            r: width / 2,
          },
          this.options.style,
        );

        return style;
      },
      afterDraw: function afterDraw(cfg, group) {
        group.icon = group.addShape('path', {
          attrs: {
            path: [['M', -4, -4], ['L', 4, -4], ['L', 4, 4], ['L', -4, 4], ['Z']],
            fill: this.options.style.stroke,
            stroke: this.options.style.stroke,
          },
          draggable: true,
        });
      },
      getAnchorPoints: function getAnchorPoints() {
        return [
          [0.5, 0],
          [0.5, 1],
          [0, 0.5],
        ];
      },
    },
    'base-node',
  );
  G6.registerNode(
    'catch-node',
    {
      shapeType: 'path',
      labelPosition: 'bottom',
      options: _objectSpread2({}, catchDefaultOptions),
      getShapeStyle: function getShapeStyle(cfg) {
        cfg.size = [50, 30];
        var width = cfg.size[0];
        var height = cfg.size[1];

        var style = _objectSpread2(
          {
            path: [
              ['M', 0, -height / 3],
              ['L', width / 2, -height / 3],
              ['L', 0, (height / 3) * 2],
              ['L', -width / 2, -height / 3],
              ['Z'],
            ],
          },
          this.options.style,
        );

        return style;
      },
      getAnchorPoints: function getAnchorPoints() {
        return [
          [0.5, 0],
          [0.8, 0.38],
          [0.5, 1],
          [0.2, 0.38],
        ];
      },
    },
    'base-node',
  );
  G6.registerNode(
    'user-task-node',
    {
      options: G6.Util.deepMix({}, taskDefaultOptions, {
        icon: require('../assets/icons/flow/icon_user.svg'),
        style: {
          fill: '#E7F7FE',
          stroke: '#1890FF',
        },
        stateStyles: {
          selected: {
            fill: '#95D6FB',
          },
        },
      }),
    },
    'task-node',
  );
  G6.registerNode(
    'script-task-node',
    {
      options: G6.Util.deepMix({}, taskDefaultOptions, {
        icon: require('../assets/icons/flow/icon_script.svg'),
        style: {
          fill: '#FFF7E6',
          stroke: '#FFA940',
        },
        stateStyles: {
          selected: {
            fill: '#FFE7BA',
          },
        },
      }),
    },
    'task-node',
  );
  G6.registerNode(
    'java-task-node',
    {
      options: G6.Util.deepMix({}, taskDefaultOptions, {
        icon: require('../assets/icons/flow/icon_java.svg'),
        style: {
          fill: '#FFF1F0',
          stroke: '#FF4D4F',
        },
        stateStyles: {
          selected: {
            fill: '#FFCCC7',
          },
        },
      }),
    },
    'task-node',
  );
  G6.registerNode(
    'mail-task-node',
    {
      options: G6.Util.deepMix({}, taskDefaultOptions, {
        icon: require('../assets/icons/flow/icon_mail.svg'),
        style: {
          fill: '#F6FFED',
          stroke: '#73D13D',
        },
        stateStyles: {
          selected: {
            fill: '#D9F7BE',
          },
        },
      }),
    },
    'task-node',
  );
  G6.registerNode(
    'receive-task-node',
    {
      options: G6.Util.deepMix({}, taskDefaultOptions, {
        icon: require('../assets/icons/flow/icon_receive.svg'),
        style: {
          fill: '#FFF0F6',
          stroke: '#FF85C0',
        },
        stateStyles: {
          selected: {
            fill: '#FFD6E7',
          },
        },
      }),
    },
    'task-node',
  );
  G6.registerNode(
    'timer-start-node',
    {
      options: G6.Util.deepMix({}, startDefaultOptions, {
        icon: require('../assets/icons/flow/icon_timer.svg'),
      }),
      afterDraw: function afterDraw(cfg, group) {
        this.runAnimate(cfg, group);
      },
    },
    'start-node',
  );
  G6.registerNode(
    'message-start-node',
    {
      options: G6.Util.deepMix({}, startDefaultOptions, {
        icon: require('../assets/icons/flow/icon_message.svg'),
      }),
      afterDraw: function afterDraw(cfg, group) {
        this.runAnimate(cfg, group);
      },
    },
    'start-node',
  );
  G6.registerNode(
    'signal-start-node',
    {
      options: G6.Util.deepMix({}, startDefaultOptions, {
        icon: require('../assets/icons/flow/icon_signal.svg'),
      }),
      afterDraw: function afterDraw(cfg, group) {
        this.runAnimate(cfg, group);
      },
    },
    'start-node',
  );
  G6.registerNode(
    'timer-catch-node',
    {
      options: G6.Util.deepMix({}, catchDefaultOptions, {
        icon: require('../assets/icons/flow/icon_timer.svg'),
      }),
    },
    'catch-node',
  );
  G6.registerNode(
    'signal-catch-node',
    {
      options: G6.Util.deepMix({}, catchDefaultOptions, {
        icon: require('../assets/icons/flow/icon_signal.svg'),
      }),
    },
    'catch-node',
  );
  G6.registerNode(
    'message-catch-node',
    {
      options: G6.Util.deepMix({}, catchDefaultOptions, {
        icon: require('../assets/icons/flow/icon_message.svg'),
      }),
    },
    'catch-node',
  );
}

var uniqBy = function uniqBy(arr, key) {
  var result = [];
  arr.forEach(function(i) {
    if (
      !result.find(function(r) {
        return r[key] === i[key];
      })
    )
      result.push(i);
  });
  return result;
};

function registerEdge(G6) {
  G6.registerEdge(
    'flow-polyline-round',
    {
      options: {
        style: _objectSpread2({}, editorStyle.edgeStyle),
        stateStyles: {
          selected: {
            lineWidth: editorStyle.edgeSelectedStyle.lineWidth,
          },
          hover: {
            stroke: editorStyle.edgeActivedStyle.stroke,
          },
        },
      },
      setState: function setState(name, value, item) {
        var group = item.getContainer();
        var path = group.getChildByIndex(0);

        if (name === 'selected') {
          if (value) {
            path.attr('lineWidth', this.options.stateStyles.selected.lineWidth);
            path.attr('stroke', this.options.style.stroke);
          } else {
            path.attr('lineWidth', this.options.style.lineWidth);
          }
        } else if (name === 'hover') {
          if (value) path.attr('stroke', this.options.stateStyles.hover.stroke);
          else path.attr('stroke', this.options.style.stroke);
        }
      },
      drawShape: function drawShape(cfg, group) {
        this.group = group;
        var shapeStyle = this.getShapeStyle(cfg);
        var shape = group.addShape('path', {
          className: 'edge-shape',
          attrs: shapeStyle,
        });
        return shape;
      },
      drawLabel: function drawLabel(cfg, group) {
        var labelCfg = cfg.labelCfg || {};
        var labelStyle = this.getLabelStyle(cfg, labelCfg, group);
        var label = group.addShape('text', {
          attrs: labelStyle,
        });
        var labelBBox = label.getBBox();
        group.addShape('rect', {
          className: 'edge-labelRect',
          attrs: {
            x: labelBBox.x - editorStyle.edgeLabelRectPadding / 2,
            y: labelBBox.y - editorStyle.edgeLabelRectPadding / 2,
            width: labelBBox.width + editorStyle.edgeLabelRectPadding,
            height: labelBBox.height + editorStyle.edgeLabelRectPadding,
            fill: '#fff',
            stroke: '#fff',
          },
        });
        group.toBack();
        label.toFront();
        return label;
      },
      afterUpdate: function afterUpdate(cfg, item) {
        var label = item.getContainer().findByClassName('edge-label');
        var labelRect = item.getContainer().findByClassName('edge-labelRect');

        if (label) {
          var labelBBox = label.getBBox();
          labelRect.attr({
            x: labelBBox.x - editorStyle.edgeLabelRectPadding / 2,
            y: labelBBox.y - editorStyle.edgeLabelRectPadding / 2,
            width: labelBBox.width + editorStyle.edgeLabelRectPadding,
            height: labelBBox.height + editorStyle.edgeLabelRectPadding,
          });
        }
      },
      getShapeStyle: function getShapeStyle(cfg) {
        cfg = this.getPathPoints(cfg);
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var controlPoints = this.getControlPoints(cfg);
        var points = [startPoint];

        if (controlPoints) {
          points = points.concat(controlPoints);
        }

        points.push(endPoint);
        var path = this.getPath(points);
        var style = this.options.style;
        if (cfg.reverse)
          style = _objectSpread2(
            _objectSpread2({}, style),
            {},
            {
              lineDash: [1, 3],
            },
          );
        else
          style = _objectSpread2(
            _objectSpread2({}, style),
            {},
            {
              lineDash: null,
            },
          );
        return _objectSpread2(
          _objectSpread2(
            {
              path: path,
            },
            style,
          ),
          {},
          {
            endArrow: {
              path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
              lineDash: [0, 0],
              fill: editorStyle.edgeStyle.stroke,
            },
          },
        );
      },
      getPath: function getPath(points) {
        var path = [];

        for (var i = 0; i < points.length; i++) {
          var point = points[i];

          if (i === 0) {
            path.push(['M', point.x, point.y]);
          } else if (i === points.length - 1) {
            path.push(['L', point.x, point.y]);
          } else {
            var prevPoint = points[i - 1];
            var nextPoint = points[i + 1];
            var cornerLen = 5;

            if (
              Math.abs(point.y - prevPoint.y) > cornerLen ||
              Math.abs(point.x - prevPoint.x) > cornerLen
            ) {
              if (prevPoint.x === point.x) {
                path.push([
                  'L',
                  point.x,
                  point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen,
                ]);
              } else if (prevPoint.y === point.y) {
                path.push([
                  'L',
                  point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen,
                  point.y,
                ]);
              }
            }

            var yLen = Math.abs(point.y - nextPoint.y);
            var xLen = Math.abs(point.x - nextPoint.x);

            if (yLen > 0 && yLen < cornerLen) {
              cornerLen = yLen;
            } else if (xLen > 0 && xLen < cornerLen) {
              cornerLen = xLen;
            }

            if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
              path.push([
                'Q',
                point.x,
                point.y,
                point.x,
                point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen,
              ]);
            } else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
              path.push([
                'Q',
                point.x,
                point.y,
                point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen,
                point.y,
              ]);
            }
          }
        }

        return path;
      },
      getControlPoints: function getControlPoints(cfg) {
        if (!cfg.sourceNode) {
          return cfg.controlPoints;
        }

        return this.polylineFinding(
          cfg.sourceNode,
          cfg.targetNode,
          cfg.startPoint,
          cfg.endPoint,
          15,
        );
      },
      getExpandedBBox: function getExpandedBBox(bbox, offset) {
        return 0 === bbox.width && 0 === bbox.height
          ? bbox
          : {
              centerX: bbox.centerX,
              centerY: bbox.centerY,
              minX: bbox.minX - offset,
              minY: bbox.minY - offset,
              maxX: bbox.maxX + offset,
              maxY: bbox.maxY + offset,
              height: bbox.height + 2 * offset,
              width: bbox.width + 2 * offset,
            };
      },
      getExpandedPort: function getExpandedPort(bbox, point) {
        return Math.abs(point.x - bbox.centerX) / bbox.width >
          Math.abs(point.y - bbox.centerY) / bbox.height
          ? {
              x: point.x > bbox.centerX ? bbox.maxX : bbox.minX,
              y: point.y,
            }
          : {
              x: point.x,
              y: point.y > bbox.centerY ? bbox.maxY : bbox.minY,
            };
      },
      combineBBoxes: function combineBBoxes(sBBox, tBBox) {
        var minX = Math.min(sBBox.minX, tBBox.minX),
          minY = Math.min(sBBox.minY, tBBox.minY),
          maxX = Math.max(sBBox.maxX, tBBox.maxX),
          maxY = Math.max(sBBox.maxY, tBBox.maxY);
        return {
          centerX: (minX + maxX) / 2,
          centerY: (minY + maxY) / 2,
          minX: minX,
          minY: minY,
          maxX: maxX,
          maxY: maxY,
          height: maxY - minY,
          width: maxX - minX,
        };
      },
      getBBoxFromVertexes: function getBBoxFromVertexes(sPoint, tPoint) {
        var minX = Math.min(sPoint.x, tPoint.x),
          maxX = Math.max(sPoint.x, tPoint.x),
          minY = Math.min(sPoint.y, tPoint.y),
          maxY = Math.max(sPoint.y, tPoint.y);
        return {
          centerX: (minX + maxX) / 2,
          centerY: (minY + maxY) / 2,
          maxX: maxX,
          maxY: maxY,
          minX: minX,
          minY: minY,
          height: maxY - minY,
          width: maxX - minX,
        };
      },
      vertexOfBBox: function vertexOfBBox(bbox) {
        return [
          {
            x: bbox.minX,
            y: bbox.minY,
          },
          {
            x: bbox.maxX,
            y: bbox.minY,
          },
          {
            x: bbox.maxX,
            y: bbox.maxY,
          },
          {
            x: bbox.minX,
            y: bbox.maxY,
          },
        ];
      },
      crossPointsByLineAndBBox: function crossPointsByLineAndBBox(bbox, centerPoint) {
        var crossPoints = [];
        if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
          crossPoints = crossPoints.concat([
            {
              x: centerPoint.x,
              y: bbox.minY,
            },
            {
              x: centerPoint.x,
              y: bbox.maxY,
            },
          ]);
        if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
          crossPoints = crossPoints.concat([
            {
              x: bbox.minX,
              y: centerPoint.y,
            },
            {
              x: bbox.maxX,
              y: centerPoint.y,
            },
          ]);
        return crossPoints;
      },
      getConnectablePoints: function getConnectablePoints(sBBox, tBBox, sPoint, tPoint) {
        var _this = this;

        var lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
        var outerBBox = this.combineBBoxes(sBBox, tBBox);
        var sLineBBox = this.combineBBoxes(sBBox, lineBBox);
        var tLineBBox = this.combineBBoxes(tBBox, lineBBox);
        var points = [];
        points = points.concat(
          this.vertexOfBBox(sLineBBox),
          this.vertexOfBBox(tLineBBox),
          this.vertexOfBBox(outerBBox),
        );
        var centerPoint = {
          x: outerBBox.centerX,
          y: outerBBox.centerY,
        };
        [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(function(bbox) {
          points = points.concat(_this.crossPointsByLineAndBBox(bbox, centerPoint));
        });
        points.push({
          x: sPoint.x,
          y: tPoint.y,
        });
        points.push({
          x: tPoint.x,
          y: sPoint.y,
        });
        return points;
      },
      filterConnectablePoints: function filterConnectablePoints(points, bbox) {
        return points.filter(function(point) {
          return (
            point.x <= bbox.minX ||
            point.x >= bbox.maxX ||
            point.y <= bbox.minY ||
            point.y >= bbox.maxY
          );
        });
      },
      AStar: function AStar(points, sPoint, tPoint, sBBox, tBBox) {
        var _this2 = this;

        var openList = [sPoint];
        var closeList = [];
        points = uniqBy(this.fillId(points), 'id');
        points.push(tPoint);
        var endPoint;

        var _loop = function _loop() {
          var minCostPoint = void 0;
          openList.forEach(function(p, i) {
            if (!p.parent) p.f = 0;
            if (!minCostPoint) minCostPoint = p;
            if (p.f < minCostPoint.f) minCostPoint = p;
          });

          if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
            endPoint = minCostPoint;
            return 'break';
          }

          openList.splice(
            openList.findIndex(function(o) {
              return o.x === minCostPoint.x && o.y === minCostPoint.y;
            }),
            1,
          );
          closeList.push(minCostPoint);
          var neighbor = points.filter(function(p) {
            return (
              (p.x === minCostPoint.x || p.y === minCostPoint.y) &&
              !(p.x === minCostPoint.x && p.y === minCostPoint.y) &&
              !_this2.crossBBox([sBBox, tBBox], minCostPoint, p)
            );
          });
          neighbor.forEach(function(p) {
            var inOpen = openList.find(function(o) {
              return o.x === p.x && o.y === p.y;
            });

            var currentG = _this2.getCost(p, minCostPoint);

            if (
              closeList.find(function(o) {
                return o.x === p.x && o.y === p.y;
              })
            );
            else if (inOpen) {
              if (p.g > currentG) {
                p.parent = minCostPoint;
                p.g = currentG;
                p.f = p.g + p.h;
              }
            } else {
              p.parent = minCostPoint;
              p.g = currentG;

              var h = _this2.getCost(p, tPoint);

              if (_this2.crossBBox([tBBox], p, tPoint)) {
                h += tBBox.width / 2 + tBBox.height / 2;
              }

              p.h = h;
              p.f = p.g + p.h;
              openList.push(p);
            }
          });
        };

        while (openList.length > 0) {
          var _ret = _loop();

          if (_ret === 'break') break;
        }

        if (endPoint) {
          var result = [];
          result.push({
            x: endPoint.x,
            y: endPoint.y,
          });

          while (endPoint.parent) {
            endPoint = endPoint.parent;
            result.push({
              x: endPoint.x,
              y: endPoint.y,
            });
          }

          return result.reverse();
        }

        return [];
      },
      crossBBox: function crossBBox(bboxes, p1, p2) {
        for (var i = 0; i < bboxes.length; i++) {
          var bbox = bboxes[i];

          if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
            if ((p1.y < bbox.maxY && p2.y >= bbox.maxY) || (p2.y < bbox.maxY && p1.y >= bbox.maxY))
              return true;
          } else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
            if ((p1.x < bbox.maxX && p2.x >= bbox.maxX) || (p2.x < bbox.maxX && p1.x >= bbox.maxX))
              return true;
          }
        }

        return false;
      },
      getCost: function getCost(p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
      },
      getPointBBox: function getPointBBox(t) {
        return {
          centerX: t.x,
          centerY: t.y,
          minX: t.x,
          minY: t.y,
          maxX: t.x,
          maxY: t.y,
          height: 0,
          width: 0,
        };
      },
      fillId: function fillId(points) {
        points.forEach(function(p) {
          p.id = p.x + '-' + p.y;
        });
        return points;
      },
      polylineFinding: function polylineFinding(sNode, tNode, sPort, tPort, offset) {
        var sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
        var targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
        var sBBox = this.getExpandedBBox(sourceBBox, offset);
        var tBBox = this.getExpandedBBox(targetBBox, offset);
        var sPoint = this.getExpandedPort(sBBox, sPort);
        var tPoint = this.getExpandedPort(tBBox, tPort);
        var points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
        points = this.filterConnectablePoints(points, sBBox);
        points = this.filterConnectablePoints(points, tBBox);
        var polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
        return polylinePoints;
      },
    },
    'polyline',
  );
}

var ControlPoint = /*#__PURE__*/ (function(_Item) {
  _inherits(ControlPoint, _Item);

  var _super = _createSuper(ControlPoint);

  function ControlPoint(cfg) {
    var _this;

    _classCallCheck(this, ControlPoint);

    _this = _super.call(
      this,
      deepMix(cfg, {
        type: 'controlPoint',
        isActived: false,
        model: {
          type: 'controlPoint',
          style: _objectSpread2({}, editorStyle.anchorPointStyle),
        },
      }),
    );

    _this.enableCapture(true);

    _this.toFront();

    return _this;
  }

  return ControlPoint;
})(Item);

var Node = require('@antv/g6/lib/item/node');

var Edge = require('@antv/g6/lib/item/edge');

function registerSubProcess(G6) {
  G6.registerNode(
    'sub-process-node',
    {
      shapeType: 'rect',
      options: {
        icon: null,
        iconStyle: {
          width: 12,
          height: 12,
          left: 2,
          top: 2,
        },
        style: _objectSpread2(
          _objectSpread2({}, editorStyle.nodeStyle),
          {},
          {
            fill: '#FFFFFF',
            stroke: '#1890FF',
            cursor: 'default',
          },
        ),
        stateStyles: {
          selected: {
            fill: '#E7F7FE',
          },
          addNode: {
            fill: '#E7F7FE',
          },
          hover: {
            cursor: editorStyle.cursor.hoverNode,
          },
        },
      },
      drawControlPoints: function drawControlPoints(group) {
        var bbox = group.get('children')[0].getBBox();
        this.getControlPoints().forEach(function(p, i) {
          var anchorContainer = group.addGroup();
          var cursor = 'default';

          if (p[0] === 0 && p[1] === 0) {
            cursor = 'nwse-resize';
          } else if (p[0] === 0 && p[1] === 0.5) {
            cursor = 'ew-resize';
          } else if (p[0] === 1 && p[1] === 0) {
            cursor = 'nesw-resize';
          } else if (p[0] === 1 && p[1] === 0.5) {
            cursor = 'ew-resize';
          } else if (p[0] === 1 && p[1] === 1) {
            cursor = 'nwse-resize';
          } else if (p[0] === 0.5 && p[1] === 1) {
            cursor = 'ns-resize';
          } else if (p[0] === 0 && p[1] === 1) {
            cursor = 'nesw-resize';
          } else if (p[0] === 0.5 && p[1] === 0) {
            cursor = 'ns-resize';
          }

          var anchor = new ControlPoint({
            group: anchorContainer,
            index: i,
            model: {
              style: {
                x: bbox.minX + bbox.width * p[0],
                y: bbox.minY + bbox.height * p[1],
                cursor: cursor,
              },
            },
          });
          anchor.toFront();
          group.controlPointShapes.push(anchorContainer);

          group.getAllAnchors = function() {
            return group.controlPointShapes;
          };

          group.getAnchor = function(j) {
            return group.controlPointShapes.filter(function(a) {
              return a.get('index') === j;
            });
          };
        });
      },
      drawNodes: function drawNodes(cfg, group) {
        var nodes = [];

        if (cfg.content && cfg.content.nodes) {
          cfg.content.nodes.forEach(function(nodeCfg) {
            var nodeContainer = group.addGroup();
            var node = new Node({
              group: nodeContainer,
              capture: false,
              id: nodeCfg.id,
              groupId: cfg.id,
              model: _objectSpread2(
                _objectSpread2({}, nodeCfg),
                {},
                {
                  shape: getShapeName(nodeCfg.clazz),
                },
              ),
            });
            node.toFront();
            nodeCfg.shape = getShapeName(nodeCfg.clazz);
            nodes.push(node);
          });
        }

        return nodes;
      },
      drawEdges: function drawEdges(cfg, group) {
        var edges = [];

        if (cfg.content && cfg.content.edges) {
          cfg.content.edges.forEach(function(edgeCfg) {
            var source = edgeCfg.source;
            var target = edgeCfg.target;

            if (source && G6.Util.isString(source)) {
              source = group.findById(source);
              source = source.get('item');
            }

            if (target && G6.Util.isString(target)) {
              target = group.findById(target);
              target = target.get('item');
            }

            var edgeContainer = group.addGroup();
            var edge = new Edge({
              group: edgeContainer,
              capture: false,
              source: source,
              target: target,
              id: edgeCfg.id,
              model: _objectSpread2(
                _objectSpread2({}, edgeCfg),
                {},
                {
                  shape: 'flow-polyline-round',
                },
              ),
            });
            edge.toFront();
            var model = edge.get('model');
            edgeCfg.startPoint = model.startPoint;
            edgeCfg.endPoint = model.endPoint;
            edgeCfg.shape = 'flow-polyline-round';
            edges.push(edge);
          });
        }

        return edges;
      },
      _addNode: function _addNode(node, cfg) {
        var nodeModel = node.get('model');
        var nodes = nodeModel.content ? nodeModel.content.nodes : [];
        var edges = nodeModel.content ? nodeModel.content.edges : [];
        nodes.push(cfg);
        return {
          content: {
            nodes: nodes,
            edges: edges,
          },
        };
      },
      _addEdge: function _addEdge(node, cfg) {
        var nodeModel = node.get('model');
        var nodes = nodeModel.content ? nodeModel.content.nodes : [];
        var edges = nodeModel.content ? nodeModel.content.edges : [];
        edges.push(cfg);
        return {
          content: {
            nodes: nodes,
            edges: edges,
          },
        };
      },
      _updateNode: function _updateNode(node, nodeId, cfg) {
        var nodeModel = node.get('model');
        var nodes = nodeModel.content ? nodeModel.content.nodes : [];
        var edges = nodeModel.content ? nodeModel.content.edges : [];
        var tempNode = nodes.find(function(a) {
          return a.id === nodeId;
        });
        Object.assign(tempNode, cfg);
        return {
          content: {
            nodes: nodes,
            edges: edges,
          },
        };
      },
      _getItem: function _getItem(node, itemId) {
        var containerGroup = node.getContainer();
        return containerGroup.nodes.find(function(item) {
          return item.get('id') === itemId;
        });
      },
      _removeItem: function _removeItem(node, itemId) {
        var nodeModel = node.get('model');

        if (nodeModel && nodeModel.content) {
          var index = nodeModel.content.nodes.findIndex(function(item) {
            return item.id === itemId;
          });

          if (index !== -1) {
            nodeModel.content.nodes.splice(index, 1);
            return {
              content: nodeModel.content,
            };
          } else {
            index = nodeModel.content.edges.findIndex(function(item) {
              return item.id === itemId;
            });

            if (index !== -1) {
              nodeModel.content.edges.splice(index, 1);
              return {
                content: nodeModel.content,
              };
            }
          }
        }

        return {};
      },
      drawShape: function drawShape(cfg, group) {
        var _this = this;

        var shapeType = this.shapeType;
        var style = this.getShapeStyle(cfg);
        var shape = group.addShape(shapeType, {
          attrs: _objectSpread2({}, style),
        });
        this.drawIcon(cfg, group);
        this.initAnchor(group);
        var subGroup = group.addGroup({
          id: 'sub_' + cfg.id,
        });
        group.subGroup = subGroup;
        var nodes = this.drawNodes(cfg, subGroup);
        var edges = this.drawEdges(cfg, subGroup);
        group.nodes = nodes;
        group.edges = edges;
        group.controlPointShapes = [];

        group.showControlPoints = function(_group) {
          _this.drawControlPoints(_group);
        };

        group.clearControlPoints = function(_group) {
          if (_group.controlPointShapes) {
            _group.controlPointShapes.forEach(function(a) {
              return a.remove();
            });
          }

          _group.controlPointShapes = [];
        };

        group.addNodeModel = function(_node, _cfg) {
          return _this._addNode(_node, _cfg);
        };

        group.addEdgeModel = function(_node, _cfg) {
          return _this._addEdge(_node, _cfg);
        };

        group.updateNodeModel = function(_node, _itemId, _cfg) {
          return _this._updateNode(_node, _itemId, _cfg);
        };

        group.getItem = function(_node, _itemId) {
          return _this._getItem(_node, _itemId);
        };

        group.removeItem = function(_node, _itemId) {
          return _this._removeItem(_node, _itemId);
        };

        return shape;
      },
      setCustomState: function setCustomState(name, value, item) {
        var group = item.getContainer();

        if (name === 'selected') {
          var rect = group.getChildByIndex(0);

          if (value) {
            group.clearAnchor(group);
            group.showControlPoints(group);
            rect.attr('fill', this.options.stateStyles.selected.fill);
          } else {
            group.clearControlPoints(group);
            rect.attr('fill', this.options.style.fill);
          }
        }
      },
      getControlPoints: function getControlPoints() {
        return [
          [0, 0],
          [0.5, 0],
          [1, 0],
          [1, 0.5],
          [1, 1],
          [0.5, 1],
          [0, 1],
          [0, 0.5],
        ];
      },
      getShapeStyle: function getShapeStyle(cfg) {
        if (!cfg.size || !Array.isArray(cfg.size)) {
          cfg.size = [80, 44];
        }

        var width = cfg.size[0];
        var height = cfg.size[1];

        var style = _objectSpread2(
          {
            x: 0 - width / 2,
            y: 0 - height / 2,
            width: width,
            height: height,
          },
          this.options.style,
        );

        return style;
      },
      afterUpdate: function afterUpdate(cfg, node) {
        var bbox = node.getBBox();
        var group = node.getContainer();
        var subGroup = group.subGroup;

        if (subGroup) {
          subGroup.clear();
          var nodes = this.drawNodes(cfg, subGroup);
          var edges = this.drawEdges(cfg, subGroup);
          group.nodes = nodes;
          group.edges = edges;
        }
      },
    },
    'base-node',
  );
}

function registerShape(G6) {
  registerAnchor();
  registerControlPoint();
  registerNode(G6);
  registerFlowNode(G6);
  registerEdge(G6);
  registerSubProcess(G6);
}

function clickSelected(G6) {
  G6.registerBehavior('clickSelected', {
    getDefaultCfg: function getDefaultCfg() {
      return {
        multiple: false,
      };
    },
    getEvents: function getEvents() {
      return {
        'node:click': 'onClick',
        'edge:click': 'onClick',
        'edge:mouseover': 'onEdgeMouseOver',
        'edge:mouseleave': 'onEdgeMouseLeave',
        'canvas:click': 'onCanvasClick',
        'node:mouseover': 'onNodeMouseOver',
      };
    },
    onClick: function onClick(e) {
      this._clearSelected();

      this.graph.setItemState(e.item, 'selected', true);
      var selectedItems = this.graph.get('selectedItems');
      if (!selectedItems) selectedItems = [];
      selectedItems = [e.item.get('id')];
      this.graph.set('selectedItems', selectedItems);
      this.graph.emit('afteritemselected', selectedItems);
    },
    onNodeMouseOver: function onNodeMouseOver(e) {
      if (this.graph.getCurrentMode() === 'edit') this.graph.setItemState(e.item, 'hover', true);
      else this.graph.setItemState(e.item, 'hover', false);
    },
    onEdgeMouseOver: function onEdgeMouseOver(e) {
      if (this.graph.getCurrentMode() === 'edit' && !e.item.hasState('selected'))
        this.graph.setItemState(e.item, 'hover', true);
    },
    onEdgeMouseLeave: function onEdgeMouseLeave(e) {
      if (this.graph.getCurrentMode() === 'edit' && !e.item.hasState('selected'))
        this.graph.setItemState(e.item, 'hover', false);
    },
    onCanvasClick: function onCanvasClick() {
      this._clearSelected();
    },
    _clearSubProcessSelected: function _clearSubProcessSelected() {
      var _this = this;

      var subProcessList = this.graph.findAll('node', function(node) {
        if (node.get('model')) {
          var clazz = node.get('model').clazz;
          return clazz === 'subProcess';
        } else {
          return false;
        }
      });
      subProcessList.forEach(function(node) {
        var group = node.getContainer();
        var subGroup = group.subGroup;

        _this._clearGroupSelected(subGroup);
      });
    },
    _clearGroupSelected: function _clearGroupSelected(group) {
      var selected = group.findAll(function(subGroup) {
        var node = subGroup.get('item');

        if (node) {
          return node.hasState('selected');
        } else {
          return false;
        }
      });
      selected.forEach(function(subGroup) {
        var node = subGroup.get('item');

        if (node) {
          node.setState('selected', false);
        }
      });
    },
    _clearSelected: function _clearSelected() {
      var _this2 = this;

      var selected = this.graph.findAllByState('node', 'selected');
      selected.forEach(function(node) {
        _this2.graph.setItemState(node, 'selected', false);
      });
      selected = this.graph.findAllByState('edge', 'selected');
      selected.forEach(function(edge) {
        _this2.graph.setItemState(edge, 'selected', false);
      });

      this._clearSubProcessSelected();

      this.graph.set('selectedItems', []);
      this.graph.emit('afteritemselected', []);
    },
  });
}

function deleteItem(G6) {
  G6.registerBehavior('deleteItem', {
    getEvents: function getEvents() {
      return {
        keydown: 'onKeydown',
        'canvas:mouseleave': 'onCanvasLeave',
        'canvas:mouseenter': 'onCanvasFocus',
      };
    },
    onKeydown: function onKeydown(e) {
      var items = this.graph.get('selectedItems');
      var focus = this.graph.get('focusGraphWrapper');

      if (e.keyCode === 8 && items && items.length > 0 && focus) {
        if (this.graph.executeCommand) {
          this.graph.executeCommand('delete', {});
        } else {
          this.graph.remove(items[0]);
        }

        this.graph.set('selectedItems', []);
        this.graph.emit('afteritemselected', []);
      }
    },
    onCanvasLeave: function onCanvasLeave(e) {
      this.graph.set('focusGraphWrapper', false);
    },
    onCanvasFocus: function onCanvasFocus() {
      this.graph.set('focusGraphWrapper', true);
    },
  });
}

function dragNode(G6) {
  G6.registerBehavior('dragNode', {
    getDefaultCfg: function getDefaultCfg() {
      return {
        updateEdge: true,
        delegate: true,
        delegateStyle: {},
        align: true,
      };
    },
    getEvents: function getEvents() {
      return {
        'node:dragstart': 'onDragStart',
        'node:drag': 'onDrag',
        'node:dragend': 'onDragEnd',
      };
    },
    onDragStart: function onDragStart(e) {
      if (!this.shouldBegin.call(this, e)) {
        return;
      }

      this.target = e.item;
      this.origin = {
        x: e.x,
        y: e.y,
      };
    },
    onDrag: function onDrag(e) {
      if (!this.origin) {
        return;
      }

      if (!this.get('shouldUpdate').call(this, e)) {
        return;
      }

      var origin = this.origin;
      var groupId = this.target.get('groupId');
      var model = this.target.get('model');

      if (!this.point) {
        this.point = {
          x: model.x,
          y: model.y,
        };
      }

      if (groupId) {
        var subProcessNode = this.graph.findById(groupId);
        var subProcessBBox = subProcessNode.getBBox();
        var x = e.x - origin.x + this.point.x + subProcessBBox.x + subProcessBBox.width / 2;
        var y = e.y - origin.y + this.point.y + subProcessBBox.y + subProcessBBox.height / 2;
        this.origin = {
          x: e.x,
          y: e.y,
        };
        this.point = {
          x: x - subProcessBBox.x - subProcessBBox.width / 2,
          y: y - subProcessBBox.y - subProcessBBox.height / 2,
        };

        if (this.delegate) {
          this._updateDelegate(this.target, x, y);
        }
      } else {
        var _x = e.x - origin.x + this.point.x;

        var _y = e.y - origin.y + this.point.y;

        this.origin = {
          x: e.x,
          y: e.y,
        };
        this.point = {
          x: _x,
          y: _y,
        };

        if (this.delegate) {
          this._updateDelegate(this.target, _x, _y);
        }
      }
    },
    onDragEnd: function onDragEnd(e) {
      if (!this.shouldEnd.call(this, e)) {
        return;
      }

      if (!this.origin) {
        return;
      }

      var delegateShape = e.item.get('delegateShape');
      var groupId = this.target.get('groupId');

      if (groupId) {
        if (delegateShape) {
          var subProcessNode = this.graph.findById(groupId);
          var subProcessBBox = subProcessNode.getBBox();
          var bbox = delegateShape.getBBox();
          var x = bbox.x + bbox.width / 2 - subProcessBBox.x - subProcessBBox.width / 2;
          var y = bbox.y + bbox.height / 2 - subProcessBBox.y - subProcessBBox.height / 2;
          delegateShape.remove();
          this.target.set('delegateShape', null);
          var group = subProcessNode.getContainer();
          var id = this.target.get('id');
          var resultModel = group.updateNodeModel(subProcessNode, id, {
            x: x,
            y: y,
          });

          this._updateItem(subProcessNode, resultModel);
        }
      } else {
        if (delegateShape) {
          var _bbox = delegateShape.getBBox();

          var _x2 = _bbox.x + _bbox.width / 2;

          var _y2 = _bbox.y + _bbox.height / 2;

          delegateShape.remove();
          this.target.set('delegateShape', null);

          this._updateItem(this.target, {
            x: _x2,
            y: _y2,
          });
        }
      }

      this.point = null;
      this.origin = null;
      this.graph.emit('afternodedragend');
    },
    _updateItem: function _updateItem(item, point) {
      if (this.graph.executeCommand) {
        this.graph.executeCommand('update', {
          itemId: item.get('id'),
          updateModel: point,
        });
      } else {
        if (this.get('updateEdge')) {
          this.graph.updateItem(item, point);
        } else {
          item.updatePosition(point);
        }
      }
    },
    _updateDelegate: function _updateDelegate(item, x, y) {
      var self = this;
      var shape = item.get('delegateShape');
      var bbox = item.get('keyShape').getBBox();

      if (!shape) {
        var parent = self.graph.get('group');
        var attrs = editorStyle.nodeDelegationStyle;
        shape = parent.addShape('rect', {
          attrs: _objectSpread2(
            {
              width: bbox.width,
              height: bbox.height,
              x: x - bbox.width / 2,
              y: y - bbox.height / 2,
              nodeId: item.get('id'),
            },
            attrs,
          ),
        });
        shape.set('capture', false);
        item.set('delegateShape', shape);
      }

      shape.attr({
        x: x - bbox.width / 2,
        y: y - bbox.height / 2,
      });
      this.graph.paint();
      this.graph.emit('afternodedrag', shape);
    },
  });
}

function dragEdge(G6) {
  G6.registerBehavior('dragEdge', {
    getDefaultCfg: function getDefaultCfg() {
      return {
        updateEdge: true,
        delegate: true,
        delegateStyle: {},
        dragEdge: false,
      };
    },
    getEvents: function getEvents() {
      return {
        'anchor:dragstart': 'onDragStart',
        'anchor:drag': 'onDrag',
        'anchor:dragend': 'onDragEnd',
        'anchor:dragenter': 'onDragEnter',
        'anchor:dragleave': 'onDragLeave',
      };
    },
    onDragEnter: function onDragEnter(e) {
      if (!this.origin) {
        return;
      }

      if (!this.sameNode(e)) {
        e.item.setHotspotActived(true);
        this.origin.targetNode = e.target
          .getParent()
          .getParent()
          .get('item');
        this.origin.targetAnchor = e.item.get('index');
      }
    },
    onDragLeave: function onDragLeave(e) {
      if (!this.origin) {
        return;
      }

      if (!this.sameNode(e)) {
        e.item.setHotspotActived(false);
        this.origin.targetNode = null;
        this.origin.targetAnchor = null;
      }
    },
    onDragStart: function onDragStart(e) {
      var node = e.target
        .getParent()
        .getParent()
        .get('item');
      var anchorIndex = e.item.get('index');
      var point = node.getAnchorPoints()[anchorIndex];
      this.target = e.item;
      var groupId = node.get('groupId');

      if (groupId) {
        var subProcessNode = e.target
          .getParent()
          .getParent()
          .getParent()
          .getParent()
          .get('item');
        var subProcessBBox = subProcessNode.getBBox();
        this.origin = {
          x: point.x + subProcessBBox.x + subProcessBBox.width / 2,
          y: point.y + subProcessBBox.y + subProcessBBox.height / 2,
          sourceNode: node,
          sourceAnchor: anchorIndex,
        };
        this.dragEdgeBeforeShowAnchorBySub(subProcessNode);
      } else {
        this.origin = {
          x: point.x,
          y: point.y,
          sourceNode: node,
          sourceAnchor: anchorIndex,
        };
        this.dragEdgeBeforeShowAnchor(e);
      }

      this.graph.set('edgeDragging', true);
    },
    onDrag: function onDrag(e) {
      if (!this.origin) {
        return;
      }

      this._updateEdge(this.target, e);
    },
    onDragEnd: function onDragEnd(e) {
      if (!this.origin) {
        return;
      }

      var delegateShape = e.item.get('edgeDelegate');

      if (delegateShape) {
        delegateShape.remove();
        this.target.set('edgeDelegate', null);
      }

      this._updateEdge(this.target, e, true);

      this.graph.setItemState(this.origin.sourceNode, 'show-anchor', false);
      this.target = null;
      this.origin = null;
      this.graph.set('edgeDragging', false);
    },
    sameNode: function sameNode(e) {
      return (
        e.target instanceof Marker &&
        e.target.getParent() &&
        e.target
          .getParent()
          .getParent()
          .get('item')
          .get('id') === this.origin.sourceNode.get('id')
      );
    },
    dragEdgeBeforeShowAnchorBySub: function dragEdgeBeforeShowAnchorBySub(subProcessNode) {
      var group = subProcessNode.getContainer();
      group.nodes.forEach(function(a) {
        var aGroup = a.getContainer();
        aGroup.showAnchor();
        aGroup.anchorShapes.forEach(function(b) {
          return b.get('item').showHotpot();
        });
      });
    },
    dragEdgeBeforeShowAnchor: function dragEdgeBeforeShowAnchor(e) {
      var sourceGroupId = this.origin.sourceNode.getModel().groupId;
      this.graph.getNodes().forEach(function(node) {
        if (
          node.getModel().clazz === 'start' ||
          node.getModel().clazz === 'timerStart' ||
          node.getModel().clazz === 'messageStart'
        )
          return;
        var targetGroupId = node.getModel().groupId;
        if (
          (!sourceGroupId && targetGroupId) ||
          (sourceGroupId && !targetGroupId) ||
          sourceGroupId !== targetGroupId
        )
          return;
        var group = node.getContainer();
        group.showAnchor();
        group.anchorShapes.forEach(function(a) {
          return a.get('item').showHotpot();
        });
      });
    },
    _updateEdge: function _updateEdge(item, e, force) {
      var x = e.x;
      var y = e.y;

      if (this.delegate && !force) {
        this._updateEdgeDelegate(item, x, y);

        return;
      }

      var node = e.target
        .getParent()
        .getParent()
        .get('item');
      var groupId = node.get('groupId');

      if (groupId) {
        this._addSubProcessEdge(node, e);
      } else {
        this._addEdge(e);
      }

      this._clearAllAnchor();

      this.graph.paint();
    },
    _updateEdgeDelegate: function _updateEdgeDelegate(item, x, y) {
      var self = this;
      var edgeShape = item.get('edgeDelegate');

      if (!edgeShape) {
        var parent = self.graph.get('group');
        edgeShape = parent.addShape('line', {
          attrs: _objectSpread2(
            {
              x1: this.origin.x,
              y1: this.origin.y,
              x2: x,
              y2: y,
            },
            editorStyle.edgeDelegationStyle,
          ),
        });
        edgeShape.set('capture', false);
        item.set('edgeDelegate', edgeShape);
      }

      edgeShape.attr({
        x2: x,
        y2: y,
      });
      this.graph.paint();
    },
    _clearAllAnchor: function _clearAllAnchor() {
      this.graph.getNodes().forEach(function(node) {
        var group = node.getContainer();
        group.clearAnchor();
      });
    },
    _addSubProcessEdge: function _addSubProcessEdge(node, e) {
      if (this.origin.targetNode) {
        var group = node
          .getContainer()
          .getParent()
          .getParent();
        var subProcess = node
          .getContainer()
          .getParent()
          .getParent()
          .get('item');
        var sourceId = this.origin.sourceNode.get('id');
        var targetId = this.origin.targetNode.get('id');
        var addModel = {
          id: sourceId + '_to_' + targetId,
          clazz: 'flow',
          source: sourceId,
          target: targetId,
          sourceAnchor: this.origin.sourceAnchor,
          targetAnchor: this.origin.targetAnchor,
        };
        var resultModel = group.addEdgeModel(subProcess, addModel);

        if (this.graph.executeCommand) {
          this.graph.executeCommand('update', {
            itemId: subProcess.get('id'),
            updateModel: resultModel,
          });
        } else {
          this.graph.updateItem(node, resultModel);
        }
      }
    },
    _addEdge: function _addEdge() {
      if (this.origin.targetNode) {
        var addModel = {
          clazz: 'flow',
          source: this.origin.sourceNode.get('id'),
          target: this.origin.targetNode.get('id'),
          sourceAnchor: this.origin.sourceAnchor,
          targetAnchor: this.origin.targetAnchor,
        };

        if (this.graph.executeCommand) {
          this.graph.executeCommand('add', {
            type: 'edge',
            addModel: addModel,
          });
        } else {
          this.graph.add('edge', addModel);
        }
      }
    },
  });
}

function dragPanelItemAddNode(G6) {
  G6.registerBehavior('dragPanelItemAddNode', {
    getDefaultCfg: function getDefaultCfg() {
      return {};
    },
    getEvents: function getEvents() {
      return {
        'canvas:mousemove': 'onMouseMove',
        'canvas:mouseup': 'onMouseUp',
        'canvas:mouseleave': 'onMouseLeave',
      };
    },
    onMouseMove: function onMouseMove(e) {
      if (this.graph.get('addNodeDragging')) {
        var delegateShape = this.graph.get('addDelegateShape');
        var addModel = this.graph.get('addModel');
        var width = parseInt(addModel.size.split('*')[0]);
        var height = parseInt(addModel.size.split('*')[1]);
        var point = this.graph.getPointByClient(e.x, e.y);
        var x = point.x;
        var y = point.y;

        if (!delegateShape) {
          var parent = this.graph.get('group');
          delegateShape = parent.addShape('rect', {
            attrs: _objectSpread2(
              {
                width: width,
                height: height,
                x: x - width / 2,
                y: y - height / 2,
              },
              editorStyle.nodeDelegationStyle,
            ),
          });
          delegateShape.set('capture', false);
          this.graph.set('addDelegateShape', delegateShape);
        }

        delegateShape.attr({
          x: x - width / 2,
          y: y - height / 2,
        });
        this.graph.paint();
        this.graph.emit('afternodedrag', delegateShape);
      }
    },
    onMouseUp: function onMouseUp(e) {
      if (this.graph.get('addNodeDragging')) {
        var p = this.graph.getPointByClient(e.clientX, e.clientY);
        var subProcessNode = this.graph.find('node', function(node) {
          if (node.get('model')) {
            var clazz = node.get('model').clazz;

            if (clazz === 'subProcess') {
              var bbox = node.getBBox();
              return p.x > bbox.minX && bbox.maxX > p.x && p.y > bbox.minY && bbox.maxY > p.y;
            }
          } else {
            return false;
          }
        });

        if (subProcessNode) {
          if (p.x > 0 && p.y > 0) {
            this._addNodeBySubProcess(p, subProcessNode);
          }
        } else {
          if (p.x > 0 && p.y > 0) {
            this._addNode(p);
          }
        }
      }
    },
    _addNodeBySubProcess: function _addNodeBySubProcess(p, node) {
      if (this.graph.get('addNodeDragging')) {
        var addModel = this.graph.get('addModel');
        var _addModel$clazz = addModel.clazz,
          clazz = _addModel$clazz === void 0 ? 'userTask' : _addModel$clazz;
        addModel.shape = getShapeName(clazz);
        addModel.size = addModel.size.split('*');
        var timestamp = new Date().getTime();
        var id = clazz + timestamp;
        var bbox = node.getBBox();
        var x = p.x - bbox.x - bbox.width / 2;
        var y = p.y - bbox.y - bbox.height / 2;

        var nodeCfg = _objectSpread2(
          _objectSpread2({}, addModel),
          {},
          {
            x: x,
            y: y,
            id: id,
          },
        );

        var group = node.getContainer();
        var resultModel = group.addNodeModel(node, nodeCfg);

        if (this.graph.executeCommand) {
          this.graph.executeCommand('update', {
            itemId: node.get('id'),
            updateModel: resultModel,
          });
        } else {
          this.graph.updateItem(node, resultModel);
        }
      }
    },
    onMouseLeave: function onMouseLeave(e) {
      if (this.graph.get('addNodeDragging')) {
        this._clearDelegate();
      }
    },
    _clearDelegate: function _clearDelegate() {
      var delegateShape = this.graph.get('addDelegateShape');

      if (delegateShape) {
        delegateShape.remove();
        this.graph.set('addDelegateShape', null);
        this.graph.paint();
      }

      this.graph.emit('afternodedragend');
    },
    _addNode: function _addNode(p) {
      if (this.graph.get('addNodeDragging')) {
        var addModel = this.graph.get('addModel');
        var _addModel$clazz2 = addModel.clazz,
          clazz = _addModel$clazz2 === void 0 ? 'userTask' : _addModel$clazz2;
        addModel.type = getShapeName(clazz);
        var timestamp = new Date().getTime();
        var id = clazz + timestamp;
        var x = p.x;
        var y = p.y;

        if (this.graph.executeCommand) {
          this.graph.executeCommand('add', {
            type: 'node',
            addModel: _objectSpread2(
              _objectSpread2({}, addModel),
              {},
              {
                x: x,
                y: y,
                id: id,
              },
            ),
          });
        } else {
          this.graph.add(
            'node',
            _objectSpread2(
              _objectSpread2({}, addModel),
              {},
              {
                x: x,
                y: y,
                id: id,
              },
            ),
          );
        }

        this._clearDelegate();
      }
    },
  });
}

function hoverAnchorActived(G6) {
  G6.registerBehavior('hoverAnchorActived', {
    getEvents: function getEvents() {
      return {
        'anchor:mouseenter': 'onAnchorEnter',
        'anchor:mousemove': 'onAnchorEnter',
        'anchor:mouseleave': 'onAnchorLeave',
      };
    },
    onAnchorEnter: function onAnchorEnter(e) {
      if (!this.graph.get('edgeDragging')) this.graph.setItemState(e.item, 'active-anchor', true);
    },
    onAnchorLeave: function onAnchorLeave(e) {
      if (!this.graph.get('edgeDragging')) {
        var node = e.item.getContainer().getParent();

        if (node) {
          this.graph.setItemState(e.item, 'active-anchor', false);
        }
      }
    },
  });
}

function hoverNodeActived(G6) {
  G6.registerBehavior('hoverNodeActived', {
    getEvents: function getEvents() {
      return {
        'node:mouseenter': 'onNodeEnter',
        'node:mouseleave': 'onNodeLeave',
        'anchor:mouseleave': 'onAnchorLeave',
      };
    },
    onAnchorLeave: function onAnchorLeave(e) {
      var node = e.item.getContainer().getParent();

      if (node && !this.graph.get('edgeDragging')) {
        this.graph.setItemState(node.get('item'), 'show-anchor', false);
      }
    },
    onNodeEnter: function onNodeEnter(e) {
      var clazz = e.item.getModel().clazz;
      if (clazz !== 'endEvent' && !this.graph.get('edgeDragging'))
        this.graph.setItemState(e.item, 'show-anchor', true);
    },
    onNodeLeave: function onNodeLeave(e) {
      if (!(e.target instanceof Marker) && !this.graph.get('edgeDragging')) {
        this.graph.setItemState(e.item, 'show-anchor', false);
      }
    },
  });
}

function itemAlign(G6) {
  var mix = G6.Util.mix;
  G6.registerBehavior('itemAlign', {
    getDefaultCfg: function getDefaultCfg() {
      return {
        alignLineStyle: {
          stroke: '#FA8C16',
          lineWidth: 1,
        },
        tolerance: 10,
        _alignLines: [],
      };
    },
    getEvents: function getEvents() {
      return {
        afternodedrag: 'onDrag',
        afternodedragend: 'onDragEnd',
      };
    },
    onDrag: function onDrag(shape) {
      this._clearAlignLine();

      this._itemAlign(shape);
    },
    onDragEnd: function onDragEnd() {
      this._clearAlignLine();
    },
    _itemAlign: function _itemAlign(item) {
      var _this = this;

      var bbox = item.getBBox();
      var ct = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y,
      };
      var cc = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };
      var cb = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height,
      };
      var lc = {
        x: bbox.x,
        y: bbox.y + bbox.height / 2,
      };
      var rc = {
        x: bbox.x + bbox.width,
        y: bbox.y + bbox.height / 2,
      };
      var nodes =
        item._attrs && item._attrs.nodeId
          ? this.graph.getNodes().filter(function(n) {
              return n.get('id') !== item._attrs.nodeId;
            })
          : this.graph.getNodes();
      each(nodes, function(node) {
        var horizontalLines = [];
        var verticalLines = [];
        var p = null;
        var bbox1 = node.getBBox();
        each(_this.getHorizontalLines(bbox1), function(line) {
          horizontalLines.push(_this.getDistance(line, ct));
          horizontalLines.push(_this.getDistance(line, cc));
          horizontalLines.push(_this.getDistance(line, cb));
        });
        each(_this.getVerticalLines(bbox1), function(line) {
          verticalLines.push(_this.getDistance(line, lc));
          verticalLines.push(_this.getDistance(line, cc));
          verticalLines.push(_this.getDistance(line, rc));
        });
        horizontalLines.sort(function(a, b) {
          return a.dis - b.dis;
        });
        verticalLines.sort(function(a, b) {
          return a.dis - b.dis;
        });

        if (horizontalLines.length > 0 && horizontalLines[0].dis < _this.tolerance) {
          item.attr({
            y: horizontalLines[0].line[1] - horizontalLines[0].point.y + bbox.y,
          });
          p = {
            horizontals: [horizontalLines[0]],
          };

          for (var i = 1; i < 3; i++) {
            horizontalLines[0].dis === horizontalLines[i].dis &&
              p.horizontals.push(horizontalLines[i]);
          }
        }

        if (verticalLines.length > 0 && verticalLines[0].dis < _this.tolerance) {
          item.attr({
            x: verticalLines[0].line[0] - verticalLines[0].point.x + bbox.x,
          });
          p
            ? (p.verticals = [verticalLines[0]])
            : (p = {
                verticals: [verticalLines[0]],
              });

          for (var _i = 1; _i < 3; _i++) {
            verticalLines[0].dis === verticalLines[_i].dis && p.verticals.push(verticalLines[_i]);
          }
        }

        if (p) {
          p.bbox = bbox;

          _this._addAlignLine(p);
        }
      });
    },
    _addAlignLine: function _addAlignLine(p) {
      var group = this.graph.get('group');
      var bbox = p.bbox;
      var lineStyle = this.alignLineStyle;
      var lineArr = this._alignLines;

      if (p.horizontals) {
        each(p.horizontals, function(lineObj) {
          var line = lineObj.line;
          var point = lineObj.point;
          var lineHalf = (line[0] + line[2]) / 2;
          var x1, x2;

          if (point.x < lineHalf) {
            x1 = point.x - bbox.width / 2;
            x2 = Math.max(line[0], line[2]);
          } else {
            x1 = point.x + bbox.width / 2;
            x2 = Math.min(line[0], line[2]);
          }

          var shape = group.addShape('line', {
            attrs: mix(
              {
                x1: x1,
                y1: line[1],
                x2: x2,
                y2: line[1],
              },
              lineStyle,
            ),
            capture: false,
          });
          lineArr.push(shape);
        });
      }

      if (p.verticals) {
        each(p.verticals, function(lineObj) {
          var line = lineObj.line;
          var point = lineObj.point;
          var lineHalf = (line[1] + line[3]) / 2;
          var y1, y2;

          if (point.y < lineHalf) {
            y1 = point.y - bbox.height / 2;
            y2 = Math.max(line[1], line[3]);
          } else {
            y1 = point.y + bbox.height / 2;
            y2 = Math.min(line[1], line[3]);
          }

          var shape = group.addShape('line', {
            attrs: mix(
              {
                x1: line[0],
                y1: y1,
                x2: line[0],
                y2: y2,
              },
              lineStyle,
            ),
            capture: false,
          });
          lineArr.push(shape);
        });
      }
    },
    getHorizontalLines: function getHorizontalLines(bbox) {
      return [
        [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
        [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
        [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
      ];
    },
    getVerticalLines: function getVerticalLines(bbox) {
      return [
        [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
        [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
        [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
      ];
    },
    getDistance: function getDistance(line, point) {
      return {
        line: line,
        point: point,
        dis: this.pointLineDistance(line[0], line[1], line[2], line[3], point.x, point.y),
      };
    },
    pointLineDistance: function pointLineDistance(lineX1, lineY1, lineX2, lineY2, pointX, pointY) {
      var lineLength = [lineX2 - lineX1, lineY2 - lineY1];
      if (vec2.exactEquals(lineLength, [0, 0])) return NaN;
      var s = [-lineLength[1], lineLength[0]];
      vec2.normalize(s, s);
      return Math.abs(vec2.dot([pointX - lineX1, pointY - lineY1], s));
    },
    _clearAlignLine: function _clearAlignLine() {
      each(this._alignLines, function(line) {
        line.remove();
      });
      this._alignLines = [];
      this.graph.paint();
    },
  });
}

function dragPoint(G6) {
  G6.registerBehavior('dragPoint', {
    getDefaultCfg: function getDefaultCfg() {
      return {
        updateEdge: true,
        delegate: true,
        delegateStyle: {},
        dragEdge: false,
      };
    },
    getEvents: function getEvents() {
      return {
        'controlPoint:dragstart': 'onDragStart',
        'controlPoint:drag': 'onDrag',
        'controlPoint:dragend': 'onDragEnd',
      };
    },
    onDragStart: function onDragStart(e) {
      var node = e.target
        .getParent()
        .getParent()
        .get('item');
      var anchorIndex = e.item.get('index');
      this.target = e.item;
      this.origin = {
        x: e.x,
        y: e.y,
        sourceNode: node,
        sourceAnchor: anchorIndex,
      };
      this.graph.set('edgeDragging', true);
    },
    onDrag: function onDrag(e) {
      if (!this.origin) {
        return;
      }

      var node = e.target
        .getParent()
        .getParent()
        .get('item');
      var anchorIndex = e.item.get('index');
      var model = node.getModel();
      var currentWidth = model.size[0];
      var currentHeight = model.size[1];
      var addWidth = e.x - this.origin.x;
      var addHeight = e.y - this.origin.y;
      var width = currentWidth;
      var height = currentHeight;
      var pointIndex = this.origin.sourceAnchor;

      if (pointIndex === 0) {
        width = currentWidth - addWidth;
        height = currentHeight - addHeight;
      } else if (pointIndex === 1) {
        height = currentHeight - addHeight;
      } else if (pointIndex === 2) {
        width = currentWidth + addWidth;
        height = currentHeight - addHeight;
      } else if (pointIndex === 3) {
        width = currentWidth + addWidth;
      } else if (pointIndex === 4) {
        width = currentWidth + addWidth;
        height = currentHeight + addHeight;
      } else if (pointIndex === 5) {
        height = currentHeight + addHeight;
      } else if (pointIndex === 6) {
        width = currentWidth - addWidth;
        height = currentHeight + addHeight;
      } else if (pointIndex === 7) {
        width = currentWidth - addWidth;
      }

      var group = node.getContainer();
      group.controlPointShapes.forEach(function(a) {
        return a.hide();
      });
      this.graph.updateItem(node, {
        size: [width, height],
      });
      this.origin = {
        x: e.x,
        y: e.y,
        sourceNode: node,
        sourceAnchor: anchorIndex,
      };
    },
    onDragEnd: function onDragEnd(e) {
      if (!this.origin) {
        return;
      }

      var node = e.target
        .getParent()
        .getParent()
        .get('item');
      this.target = null;
      this.origin = null;
      var group = node.getContainer();
      group.clearControlPoints(group);
      group.showControlPoints(group);
      this.graph.set('edgeDragging', false);
    },
  });
}

function registerBehavior(G6) {
  clickSelected(G6);
  deleteItem(G6);
  dragNode(G6);
  dragEdge(G6);
  dragPanelItemAddNode(G6);
  hoverAnchorActived(G6);
  hoverNodeActived(G6);
  itemAlign(G6);
  dragPoint(G6);
}

registerShape(G6);
registerBehavior(G6);

var Designer = /*#__PURE__*/ (function(_React$Component) {
  _inherits(Designer, _React$Component);

  var _super = _createSuper(Designer);

  function Designer(cfg) {
    var _this;

    _classCallCheck(this, Designer);

    _this = _super.call(this, cfg);
    _this.pageRef = createRef();
    _this.toolbarRef = createRef();
    _this.itemPanelRef = createRef();
    _this.detailPanelRef = createRef();

    _this.resizeFunc = function() {};

    _this.state = {
      selectedModel: {},
      processModel: {
        id: '',
        name: '',
        clazz: 'process',
        dataObjs: [],
        signalDefs: [],
        messageDefs: [],
      },
    };
    return _this;
  }

  _createClass(Designer, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) {
          if (this.graph) {
            this.graph.changeData(this.initShape(this.props.data));
            this.graph.setMode(this.props.mode);

            if (this.cmdPlugin) {
              this.cmdPlugin.initPlugin(this.graph);
            }

            if (this.props.isView) {
              this.graph.fitView(5);
            }
          }
        }
      },
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var _this$props = this.props,
          isView = _this$props.isView,
          mode = _this$props.mode;
        var height = this.props.height - 1;
        var width = this.pageRef.current.offsetWidth;
        var plugins = [];

        if (!isView) {
          this.cmdPlugin = new Command();
          var toolbar = new Toolbar({
            container: this.toolbarRef.current,
          });
          var addItemPanel = new AddItemPanel({
            container: this.itemPanelRef.current,
          });
          var canvasPanel = new CanvasPanel({
            container: this.pageRef.current,
          });
          plugins = [this.cmdPlugin, toolbar, addItemPanel, canvasPanel];
        }

        this.graph = new G6.Graph({
          plugins: plugins,
          container: this.pageRef.current,
          height: height,
          width: width,
          modes: {
            default: ['drag-canvas', 'clickSelected'],
            view: [],
            edit: [
              'drag-canvas',
              'hoverNodeActived',
              'hoverAnchorActived',
              'dragNode',
              'dragEdge',
              'dragPanelItemAddNode',
              'clickSelected',
              'deleteItem',
              'itemAlign',
              'dragPoint',
              'brush-select',
            ],
          },
          defaultEdge: {
            type: 'flow-polyline-round',
          },
        });

        this.graph.saveXML = function() {
          var createFile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return exportXML(_this2.graph.save(), _this2.state.processModel, createFile);
        };

        if (isView) {
          this.graph.setMode('view');
        } else {
          this.graph.setMode(mode);
        }

        this.graph.data(
          this.props.data
            ? this.initShape(this.props.data)
            : {
                nodes: [],
                edges: [],
              },
        );
        this.graph.render();

        if (isView && this.props.data && this.props.data.nodes) {
          this.graph.fitView(5);
        }

        this.initEvents();
      },
    },
    {
      key: 'initShape',
      value: function initShape(data) {
        if (data && data.nodes) {
          return {
            nodes: data.nodes.map(function(node) {
              return _objectSpread2(
                {
                  type: getShapeName(node.clazz),
                },
                node,
              );
            }),
            edges: data.edges,
          };
        }

        return data;
      },
    },
    {
      key: 'initEvents',
      value: function initEvents() {
        var _this3 = this;

        this.graph.on('afteritemselected', function(items) {
          if (items && items.length > 0) {
            var item = _this3.graph.findById(items[0]);

            if (!item) {
              item = _this3.getNodeInSubProcess(items[0]);
            }

            _this3.setState({
              selectedModel: _objectSpread2({}, item.getModel()),
            });
          } else {
            _this3.setState({
              selectedModel: _this3.state.processModel,
            });
          }
        });
        var page = this.pageRef.current;
        var graph = this.graph;
        var height = this.props.height - 1;

        this.resizeFunc = function() {
          graph.changeSize(page.offsetWidth, height);
        };

        window.addEventListener('resize', this.resizeFunc);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.resizeFunc);

        if (this.graph) {
          this.graph.getNodes().forEach(function(node) {
            node.getKeyShape().stopAnimate();
          });
        }
      },
    },
    {
      key: 'onItemCfgChange',
      value: function onItemCfgChange(key, value) {
        var items = this.graph.get('selectedItems');

        if (items && items.length > 0) {
          var item = this.graph.findById(items[0]);

          if (!item) {
            item = this.getNodeInSubProcess(items[0]);
          }

          if (this.graph.executeCommand) {
            this.graph.executeCommand('update', {
              itemId: items[0],
              updateModel: _defineProperty({}, key, value),
            });
          } else {
            this.graph.updateItem(item, _defineProperty({}, key, value));
          }

          this.setState({
            selectedModel: _objectSpread2({}, item.getModel()),
          });
        } else {
          var canvasModel = _objectSpread2(
            _objectSpread2({}, this.state.processModel),
            {},
            _defineProperty({}, key, value),
          );

          this.setState({
            selectedModel: canvasModel,
          });
          this.setState({
            processModel: canvasModel,
          });
        }
      },
    },
    {
      key: 'getNodeInSubProcess',
      value: function getNodeInSubProcess(itemId) {
        var subProcess = this.graph.find('node', function(node) {
          if (node.get('model')) {
            var clazz = node.get('model').clazz;

            if (clazz === 'subProcess') {
              var containerGroup = node.getContainer();
              var subGroup = containerGroup.subGroup;
              var item = subGroup.findById(itemId);
              return subGroup.contain(item);
            } else {
              return false;
            }
          } else {
            return false;
          }
        });

        if (subProcess) {
          var group = subProcess.getContainer();
          return group.getItem(subProcess, itemId);
        }

        return null;
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var height = this.props.height;
        var _this$props2 = this.props,
          isView = _this$props2.isView,
          mode = _this$props2.mode,
          users = _this$props2.users,
          groups = _this$props2.groups,
          lang = _this$props2.lang;
        var _this$state = this.state,
          selectedModel = _this$state.selectedModel,
          processModel = _this$state.processModel;
        var signalDefs = processModel.signalDefs,
          messageDefs = processModel.messageDefs;
        var i18n = locale[lang.toLowerCase()];
        var readOnly = mode !== 'edit';
        return createElement(
          LangContext.Provider,
          {
            value: {
              i18n: i18n,
              lang: lang,
            },
          },
          createElement(
            'div',
            {
              className: styles.root,
            },
            !isView &&
              createElement(ToolbarPanel, {
                ref: this.toolbarRef,
              }),
            createElement(
              'div',
              null,
              !isView &&
                createElement(ItemPanel, {
                  ref: this.itemPanelRef,
                  height: height,
                }),
              createElement('div', {
                ref: this.pageRef,
                className: styles.canvasPanel,
                style: {
                  height: height,
                  width: isView ? '100%' : '70%',
                  borderBottom: isView ? 0 : null,
                },
              }),
              !isView &&
                createElement(DetailPanel, {
                  ref: this.detailPanelRef,
                  height: height,
                  model: selectedModel,
                  readOnly: readOnly,
                  users: users,
                  groups: groups,
                  signalDefs: signalDefs,
                  messageDefs: messageDefs,
                  onChange: function onChange(key, val) {
                    _this4.onItemCfgChange(key, val);
                  },
                }),
            ),
          ),
        );
      },
    },
  ]);

  return Designer;
})(Component);
Designer.defaultProps = {
  height: 500,
  isView: false,
  mode: 'edit',
  lang: 'zh',
};

export default Designer;
