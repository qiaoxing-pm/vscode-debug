import type { AbstractGraph } from '../AbstractGraph.js';
type PartialPorts = Pick<AbstractGraph, 'portsEnabled' | 'isPort' | 'getTerminalForPort' | 'isPortsEnabled' | 'setPortsEnabled'>;
type PartialType = PartialPorts;
export declare const PortsMixin: PartialType;
export {};
