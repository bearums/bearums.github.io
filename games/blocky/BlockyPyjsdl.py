#!/usr/bin/env python
# -*- coding: utf-8 -*-


import pyjsdl as pygame



def setup():
    pygame.init()
    
    screen = pygame.display.set_mode((500, 500))
    pygame.display.set_caption('Blocky')
    pygame.mouse.set_visible(1)
    
    #Create The Backgound
    bg_col= (0,99,0) #colour of background see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
    background = pygame.Surface(screen.get_size())
    background = background.convert()
    background.fill(bg_col)
    
    #set up machinery for writing to background
    font = pygame.font.Font(None, 24)
    text = font.render('Take Blocky on an adventure with wasd', 1, (10, 10, 10))
    textpos = text.get_rect(centerx=background.get_width()/2)
    background.blit(text, textpos)
        
    #create surface for block
    block_size=50
    block_col=(247,243,7)
    global x_pos
    global y_pos
    x_pos=background.get_width()/2 -0.5*block_size
    y_pos=background.get_height()/2 -0.5*block_size
    
    blocksurface = pygame.Surface((block_size,block_size))   
    pygame.draw.rect(blocksurface, (block_col), (0,0,block_size,block_size)) # rect: (x1, y1, width, height)
    
    #paint background and block on screen
    screen.blit(background, (0,0))     # blit background on screen (overwriting all)
    screen.blit(blocksurface, (x_pos,y_pos))
    

    return screen, background, blocksurface

def run():
    
    global x_pos
    global y_pos
    
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            mainloop = False # pygame window closed by user
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                mainloop = False # user pressed ESC
            elif event.key == pygame.K_d:
                x_pos+=5
                screen.blit(background,(0,0))
                screen.blit(blocksurface, (x_pos,y_pos))
            
            elif event.key == pygame.K_a:
                x_pos-=5
                screen.blit(background,(0,0))
                screen.blit(blocksurface, (x_pos,y_pos))
                
            elif event.key == pygame.K_w:
                y_pos-=5
                screen.blit(background,(0,0))
                screen.blit(blocksurface, (x_pos,y_pos))
                
            elif event.key == pygame.K_s:
                y_pos+=5
                screen.blit(background,(0,0))
                screen.blit(blocksurface, (x_pos,y_pos))
    

    pygame.display.flip()          


global screen, background, blocksurface
screen, background, blocksurface = setup()
pygame.display.setup(run)
