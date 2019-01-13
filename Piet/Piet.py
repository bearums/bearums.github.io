#!/usr/bin/env python
# -*- coding: utf-8 -*-


import pygame as pg 
import numpy as np


def setup():
    pg.init()
    
    screen = pg.display.set_mode((700, 500))
    pg.display.set_caption('Blocky')
    pg.mouse.set_visible(1)
    
    #Create The Backgound
    bg_col= (99,99,99) #colour of background see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
    background = pg.Surface(screen.get_size())
    background = background.convert()
    background.fill(bg_col)
    
    #set up machinery for writing to background
    global font
    font = pg.font.Font(None, 36)
    text = font.render('Take Blocky on an adventure with wasd', 1, (10, 10, 10))
    textpos = text.get_rect(centerx=background.get_width()/2)
    background.blit(text, textpos)
    
    
    
        
    #create surface for block
    global block_size
    block_size=50
    block_col=(247,243,7)
    global x_pos
    global y_pos
    global x_0, y_0
    x_0=10
    y_0=100
    
    global user_input, w, h
    w, h = 8, 5;
    user_input = [['' for x in range(w)] for y in range(h)]
    
    blocksurface = pg.Surface((block_size,block_size))   
    pg.draw.rect(blocksurface, (block_col), (0,0,block_size,block_size))# rect: (x1, y1, width, height)
    
    #paint background and block on screen
    screen.blit(background, (0,0))     # blit background on screen (overwriting all)
    screen.blit(blocksurface, (x_0,y_0))
    
    #draw grid 
    for u in range(0,h+1):
        pg.draw.lines(background, (0,0,0), True, [(x_0,y_0+u*block_size), (x_0+w*block_size,y_0+u*block_size)], 1)
    for u in range(0,w+1):
        pg.draw.lines(background, (0,0,0), True, [(x_0+u*block_size,y_0), (x_0+u*block_size,y_0+h*block_size)], 1)
    return screen, background, blocksurface


def run(screen, background, blocksurface):
    
    global x_pos
    global y_pos
    x_pos,y_pos=[0,0]
    text=''
    mainloop = True
    
    while mainloop:
       
        for event in pg.event.get():
            
            if event.type == pg.QUIT:
                mainloop = False
            
            elif event.type == pg.KEYDOWN:
                
                if event.key == pg.K_ESCAPE:
                    mainloop = False # user pressed ESC
                    
                #move block    
                elif event.key == pg.K_RIGHT:
                    if x_pos <w-1:
                        x_pos+=1
                elif event.key == pg.K_LEFT:
                    if x_pos > 0:
                        x_pos-=1
                elif event.key == pg.K_UP:
                    if y_pos >0:
                        y_pos-=1
                elif event.key == pg.K_DOWN:
                    if y_pos <h-1:
                        y_pos+=1
                #print x_pos, y_pos
                
                
                #listen for typing
                if event.key == pg.K_RETURN:
                    print(text)
                    user_input[x_pos][y_pos]= text
                    text = ''
                    print user_input
                elif event.key == pg.K_BACKSPACE:
                    text = text[:-1]
                else:
                    text += event.unicode
                
        
        screen.blit(background,(0,0))
        screen.blit(blocksurface, ((x_pos)*block_size + x_0, (y_pos)*block_size+y_0)) # show block
        #show text 
        txt_surface = font.render(text, True, (0,0,0))
        screen.blit(txt_surface, ((x_pos)*block_size+0.5*block_size + x_0, (y_pos)*block_size+y_0))
        
        for n in range(0,h):
            for m in range(0,w):
                cell_text=str(user_input[n][m])
                
                txt_surface = font.render(cell_text, True, (0,0,0))
                screen.blit(txt_surface, ((n)*block_size+0.5*block_size + x_0, (m)*block_size+y_0))
        
        pg.display.flip()


screen, background, blocksurface= setup()

run(screen, background, blocksurface)
